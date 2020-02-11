/* eslint
  react/no-danger: 0 */
import './boardcard.css';

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { connect } from 'react-redux';

import {
  addCardTo,
  endDragging,
  openOverlayCard,
  startDragging,
} from '../../actions';
import AbstractCard from '../AbstractCard';

class CardView extends Component {
  componentDidMount() {
    if (this.props.connectDragPreview) {
      // remove HTML5 image lors du drag d'un item
      const opts = { captureDraggingState: true };
      this.props.connectDragPreview(getEmptyImage(), opts);
    }
  }

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

CardView.propTypes = {
  connectDragPreview: PropTypes.func.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  item: PropTypes.object.isRequired,
  showfullcard: PropTypes.func.isRequired,
  source: PropTypes.string.isRequired,
};

/* ----------------------------------------

  Decorateur DragSource

---------------------------------------- */

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

const KanbanCardDrag = DragSource(
  'board-card',
  dragTargetContext,
  (conn, monitor) => ({
    connectDragPreview: conn.dragPreview(),
    connectDragSource: conn.dragSource(),
    isDragging: monitor.isDragging(),
  })
)(CardView);

/* ----------------------------------------

  Decorateur Redux

---------------------------------------- */
const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch, { item }) => ({
  addcardto: target => dispatch(addCardTo(target, item)),
  enddragging: () => dispatch(endDragging()),
  showfullcard: () => dispatch(openOverlayCard(item)),
  startdragging: () => dispatch(startDragging(item.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(KanbanCardDrag);
