/* eslint
  react/no-danger: 0 */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

import './kanbancard.css';
import { moveCard } from './../actions';
import { shorten } from './../utils/shorten';
import { humandate } from './../utils/humandate';

class KanbanCardView extends Component {

  componentDidMount () {
    if (this.props.connectDragPreview) {
      const opts = { captureDraggingState: true };
      this.props.connectDragPreview(getEmptyImage(), opts);
    }
  }

  render () {
    const {
      date,
      title,
      short,
      isDragging,
      connectDropTarget,
      connectDragSource } = this.props;
    return connectDragSource(connectDropTarget(isDragging
      ? <div className="kanbancard-placeholder" />
      : <div className="kanbancard relative"
        style={{ opacity: (isDragging ? 0.45 : 1) }}>
        <button className="kanbancard-button"
          onClick={() => {}}><span><i className="" /></span>
        </button>
        <p className="kanbancard-date">
          <span>{humandate(new Date(date))}</span></p>
        <h2 className="kanbancard-title">
          <span>{shorten(title, 60)}</span></h2>
        <div dangerouslySetInnerHTML={{ __html: short }} />
      </div>
    ));
  }
}

KanbanCardView.propTypes = {
  date: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  short: PropTypes.string.isRequired,
  isDragging: PropTypes.bool.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  connectDragPreview: PropTypes.func.isRequired
};

const KanbanCardDrop = DropTarget('kanbancard',
  ({
    hover (props, monitor) {
      const draggedId = monitor.getItem().id;
      if (draggedId !== props.id) {
        props.movecard(draggedId, props.id);
      }
    }
  }),
  dndconnect => ({
    connectDropTarget: dndconnect.dropTarget()
  })
)(KanbanCardView);

const KanbanCardDrag = DragSource('kanbancard',
  ({
    beginDrag: props => ({
      // utilisé par monitor.getItem()
      id: props.id,
      date: props.date,
      short: props.short,
      title: shorten(props.title, 60),
      connectDragPreview: props.connectDragPreview
    }),
    isDragging: (props, monitor) =>
      (props.id === monitor.getItem().id)
  }),
  (dndconnect, monitor) => ({
    isDragging: monitor.isDragging(),
    connectDragSource: dndconnect.dragSource(),
    connectDragPreview: dndconnect.dragPreview()
  })
)(KanbanCardDrop);

const KanbanCard = connect(
  () => ({}),
  dispatch => ({
    movecard: (from, to) => dispatch(moveCard(from, to))
  }),
)(KanbanCardDrag);

export default KanbanCard;
