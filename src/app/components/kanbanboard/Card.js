/* eslint
  react/no-danger: 0 */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
// import { getEmptyImage } from 'react-dnd-html5-backend';

import './card.css';
import { moveCard } from './../../actions';
import { shorten } from './../../utils/shorten';
import { humandate } from './../../utils/humandate';

class CardView extends Component {

  // componentDidMount () {
  //   if (this.props.connectDragPreview) {
  //     // remove HTML5 image lors du drag d'un item
  //     const opts = { captureDraggingState: true };
  //     this.props.connectDragPreview(getEmptyImage(), opts);
  //   }
  // }

  render () {
    const {
      date,
      title,
      short,
      isDragging,
      connectDragSource } = this.props;
    return connectDragSource(isDragging
      ? <div className="kanban-card-placeholder" />
      : <div className="kanban-card relative"
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
  date: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  short: PropTypes.string.isRequired,
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  // connectDragPreview: PropTypes.func.isRequired
};

/* ----------------------------------------

  Decorateur DragSource

---------------------------------------- */

// describes how the drag source reacts to the drag and drop events
const dragTargetContext = ({
  isDragging: (props, monitor) =>
    // check si cet element et l'element en court de drag
    (props.id === monitor.getItem().id),
  beginDrag: props => ({
    // utilisé par monitor.getItem()
    id: props.id,
    date: props.date,
    short: props.short,
    title: shorten(props.title, 60),
    // connectDragPreview: props.connectDragPreview
  })
});

const KanbanCardDrag = DragSource(
  'board-card',
  dragTargetContext,
  (conn, monitor) => ({
    isDragging: monitor.isDragging(),
    connectDragSource: conn.dragSource(),
    // connectDragPreview: conn.dragPreview()
  })
)(CardView);

/* ----------------------------------------

  Decorateur Redux

---------------------------------------- */
const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  movecard: (from, to) => dispatch(moveCard(from, to))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanCardDrag);
