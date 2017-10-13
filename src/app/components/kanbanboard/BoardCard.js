/* eslint
  react/no-danger: 0 */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

import './boardcard.css';
import AbstractCard from './../AbstractCard';
import {
  addCardTo,
  endDragging,
  startDragging,
  openOverlayCard } from './../../actions';

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
      isDragging,
      showfullcard,
      connectDragSource } = this.props;
    return connectDragSource(isDragging
      ? (<div className="kanban-card-placeholder" />)
      : (<div className={`kanban-card relative ${source}`}
        role={'button'} tabIndex="0" onClick={showfullcard}>
        <AbstractCard minify item={item} />
      </div>)
    );
  }
}

CardView.propTypes = {
  item: PropTypes.object.isRequired,
  source: PropTypes.string.isRequired,
  isDragging: PropTypes.bool.isRequired,
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
  },
  beginDrag: (props) => {
    props.startdragging();
    // object retourné pour utilisé avec monitor.getItem()
    return Object.assign({}, props.item);
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
const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch, { item }) => ({
  enddragging: () => dispatch(endDragging()),
  showfullcard: () => dispatch(openOverlayCard(item)),
  startdragging: () => dispatch(startDragging(item.id)),
  addcardto: target => dispatch(addCardTo(target, item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanCardDrag);
