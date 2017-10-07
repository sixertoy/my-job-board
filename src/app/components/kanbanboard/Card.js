/* eslint
  react/no-danger: 0 */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

import './card.css';
import { shorten } from './../../utils/shorten';
import { humandate } from './../../utils/humandate';
import {
  addCardTo,
  endDragging,
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
      isDragging,
      connectDragSource } = this.props;
    const { date, title, short } = item;
    return connectDragSource(isDragging
      ? <div className="kanban-card-placeholder" />
      : <div className={`kanban-card relative ${source}`}
        style={{ opacity: (isDragging ? 0.45 : 1) }}>
        <button className="kanban-card-button"
          onClick={() => {}}><span><i className="" /></span>
        </button>
        <p className="kanban-card-date">
          <span>{humandate(new Date(date))}</span></p>
        <h2 className="kanban-card-title">
          <span>{shorten(title, 60)}</span></h2>
        <div dangerouslySetInnerHTML={{ __html: short }} />
      </div>
    );
  }
}

CardView.propTypes = {
  item: PropTypes.object.isRequired,
  source: PropTypes.string.isRequired,
  isDragging: PropTypes.bool.isRequired,
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
    const item = Object.assign({}, props.item);
    const { target } = monitor.getDropResult();
    // FIXME ->
    props.addcardto(target, item);
    props.removecardfrom(props.source, item.id);
  },
  beginDrag: (props) => {
    const { id } = props.item;
    props.startdragging(id);
    return ({
      // utilisé par monitor.getItem()
      id,
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
const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  enddragging: () => dispatch(endDragging()),
  startdragging: id => dispatch(startDragging(id)),
  addcardto: (target, cardobj) => dispatch(addCardTo(target, cardobj)),
  removecardfrom: (source, id) => dispatch(removeCardFrom(source, id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanCardDrag);
