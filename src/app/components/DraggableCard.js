import PropTypes from 'prop-types';
import { DragLayer } from 'react-dnd';
import React, { Component } from 'react';

// application
import './draggablecard.css';
import Card from './kanbanboard/Card';

function getDraggableCardStyles (currentOffset) {
  if (!currentOffset) return ({ display: 'none' });
  const { x, y } = currentOffset;
  return {
    transform: `translate(${x}px, ${y}px)`
  };
}

// eslint-disable-next-line react/prefer-stateless-function
class DraggableCard extends Component {

  render () {
    const {
      item,
      isDragging,
      currentOffset } = this.props;
    if (!isDragging) return null;
    return (
      <div className="draggablecard-container">
        <div className="draggablecard"
          style={getDraggableCardStyles(currentOffset)}>
          <Card {...Object.assign({}, item, { id: 'placeholder' })} />
        </div>
      </div>
    );
  }
}

DraggableCard.propTypes = {
  item: PropTypes.object.isRequired,
  isDragging: PropTypes.bool.isRequired,
  currentOffset: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired
};

const collect = monitor => ({
  item: monitor.getItem() || {},
  isDragging: monitor.isDragging(),
  currentOffset: monitor.getSourceClientOffset() || { x: 0, y: 0 }
});

export default DragLayer(collect)(DraggableCard);
