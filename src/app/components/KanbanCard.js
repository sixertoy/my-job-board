/* eslint
  react/no-danger: 0 */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { DragSource, DropTarget } from 'react-dnd';

import './kanbancard.css';
import { moveCard } from './../actions';
import { humandate } from './../utils/humandate';

class KanbanCardView extends Component {
  render () {
    const {
      date,
      title,
      short,
      isDragging,
      connectDropTarget,
      connectDragSource } = this.props;
    return connectDragSource(connectDropTarget(
      <div className="kanbancard-container relative"
        style={{ opacity: (isDragging ? 0.45 : 1) }}>
        <button className="kanbancard-button"
          onClick={() => {}}><span><i className="" /></span>
        </button>
        <p className="kanbancard-date">
          <span>{humandate(new Date(date))}</span></p>
        <h2 className="kanbancard-title">
          <span>{title}</span></h2>
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
  connectDragSource: PropTypes.func.isRequired
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
    beginDrag: props => ({ id: props.id }),
    isDragging: (props, monitor) => {
      const rez = (props.id === monitor.getItem().id);
      console.log('rez', rez);
      return rez;
    }
  }),
  (dndconnect, monitor) => ({
    isDragging: monitor.isDragging(),
    connectDragSource: dndconnect.dragSource()
  })
)(KanbanCardDrop);

const KanbanCard = connect(
  () => ({}),
  dispatch => ({
    movecard: (from, to) => dispatch(moveCard(from, to))
  }),
)(KanbanCardDrag);

export default KanbanCard;
