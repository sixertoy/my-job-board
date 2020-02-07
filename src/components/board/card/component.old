/* eslint
  react/no-danger: 0 */
import './boardcard.css';

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { connect } from 'react-redux';

import AbstractCard from '../AbstractCard';

class KanbanBoardCardComponent extends Component {
  // componentDidMount() {
  //   if (this.props.connectDragPreview) {
  //     // remove HTML5 image lors du drag d'un item
  //     const opts = { captureDraggingState: true };
  //     this.props.connectDragPreview(getEmptyImage(), opts);
  //   }
  // }

  render() {
    const {
      connectDragSource,
      isDragging,
      item,
      showfullcard,
      source,
    } = this.props;
    return connectDragSource(
      isDragging ? (
        <div className="kanban-card-placeholder" />
      ) : (
        <div
          className={`kanban-card relative ${source}`}
          role="button"
          tabIndex="0"
          onClick={showfullcard}>
          <AbstractCard minify item={item} />
        </div>
      )
    );
  }
}

KanbanBoardCardComponent.propTypes = {
  connectDragPreview: PropTypes.func.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  item: PropTypes.object.isRequired,
  showfullcard: PropTypes.func.isRequired,
  source: PropTypes.string.isRequired,
};

// describes how the drag source reacts to the drag and drop events
const dragTargetContext = {
  beginDrag: props => {
    props.startdragging();
    // object retourné pour utilisé avec monitor.getItem()
    return { ...props.item };
  },
  endDrag: (props, monitor) => {
    props.enddragging();
    if (!monitor.didDrop()) return;
    const { target } = monitor.getDropResult();
    // FIXME ->
    props.addcardto(target);
  },
  isDragging: (props, monitor) =>
    // check si cet element et l'element en court de drag
    props.item.id === monitor.getItem().id,
};

export default DragSource('board-card', dragTargetContext, (conn, monitor) => ({
  connectDragPreview: conn.dragPreview(),
  connectDragSource: conn.dragSource(),
  isDragging: monitor.isDragging(),
}))(KanbanBoardCardComponent);
