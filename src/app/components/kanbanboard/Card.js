/* eslint
  react/no-danger: 0 */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

import './card.css';
import AbstractCard from './../ui/AbstractCard';
import { shorten } from './../../utils/shorten';
import {
  addCardTo,
  endDragging,
  openOverlayCard,
  startDragging,
  removeCardFrom } from './../../actions';

class CardView extends Component {

  componentDidMount () {
    if (this.props.connectDragPreview) {
      // remove HTML5 image lors du drag d'un item
      const opts = { captureDraggingState: true };
      this.props.connectDragPreview(getEmptyImage(), opts);
    }
  }

  render () {
    const {
      item,
      source,
      lastupdate,
      isDragging,
      showfullcard,
      connectDragSource } = this.props;
    return connectDragSource(isDragging
      ? <div className="kanban-card-placeholder" />
      : (<div className={`kanban-card relative ${source}`}
        role={'button'} tabIndex="0" onClick={showfullcard}>
        <AbstractCard minify item={item}
          isdragging={isDragging} lastupdate={lastupdate} />
      </div>)
    );
  }
}

CardView.propTypes = {
  item: PropTypes.object.isRequired,
  source: PropTypes.string.isRequired,
  isDragging: PropTypes.bool.isRequired,
  lastupdate: PropTypes.number.isRequired,
  showfullcard: PropTypes.func.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  connectDragPreview: PropTypes.func.isRequired
};

/* ----------------------------------------

  Decorateur DragSource

---------------------------------------- */

// describes how the drag source reacts to the drag and drop events
const dragTargetContext = ({
  isDragging: (props, monitor) =>
    // check si cet element et l'element en court de drag
    (props.item.id === monitor.getItem().id),
  endDrag: (props, monitor) => {
    props.enddragging();
    if (!monitor.didDrop()) return;
    const { target } = monitor.getDropResult();
    // FIXME ->
    props.addcardto(target);
    props.removecardfrom();
  },
  beginDrag: (props) => {
    props.startdragging();
    return ({
      // utilisé par monitor.getItem()
      id: props.item.id,
      date: props.item.date,
      short: props.item.short,
      title: shorten(props.item.title, 60)
    });
  }
});

const KanbanCardDrag = DragSource(
  'board-card',
  dragTargetContext,
  (conn, monitor) => ({
    isDragging: monitor.isDragging(),
    connectDragSource: conn.dragSource(),
    connectDragPreview: conn.dragPreview()
  })
)(CardView);

/* ----------------------------------------

  Decorateur Redux

---------------------------------------- */
const mapStateToProps = state => ({
  lastupdate: state.lastupdate
});
const mapDispatchToProps = (dispatch, { item, source }) => ({
  enddragging: () => dispatch(endDragging()),
  showfullcard: () => dispatch(openOverlayCard(item)),
  startdragging: () => dispatch(startDragging(item.id)),
  addcardto: target => dispatch(addCardTo(target, item)),
  removecardfrom: () => dispatch(removeCardFrom(source, item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanCardDrag);
