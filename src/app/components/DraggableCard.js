/* eslint
  react/no-danger: 0 */
import PropTypes from 'prop-types';
import { DragLayer } from 'react-dnd';
import React, { Component } from 'react';

// application
import './draggablecard.css';
import { shorten } from './../utils/shorten';
import { humandate } from './../utils/humandate';

function getDraggableCardStyles (currentOffset) {
  const { x, y } = currentOffset;
  if (!currentOffset || (x <= 0 && y <= 0)) {
    return ({ display: 'none', visibility: 'hidden' });
  }
  return { transform: `translate(${x}px, ${y}px)` };
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
          <div className="kanban-card relative"
            style={{ transform: 'rotate(7deg)' }}>
            <p className="kanban-card-date">
              <span>{humandate(new Date(item.date))}</span></p>
            <h2 className="kanban-card-title">
              <span>{shorten(item.title, 60)}</span></h2>
            <div dangerouslySetInnerHTML={{ __html: item.short }} />
          </div>
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
