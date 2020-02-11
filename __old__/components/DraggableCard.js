/* eslint
  react/no-danger: 0 */
// application
import './draggablecard.css';

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { DragLayer } from 'react-dnd';

import AbstractCard from './AbstractCard';

function getDraggableCardStyles(currentoffset) {
  const { x, y } = currentoffset;
  const isabsolutezero = x <= 0 && y <= 0;
  if (!currentoffset || isabsolutezero) {
    return { display: 'none', visibility: 'hidden' };
  }
  return { transform: `translate(${x}px, ${y}px)` };
}

// eslint-disable-next-line react/prefer-stateless-function
class DraggableCard extends Component {
  render() {
    const { currentoffset, item } = this.props;
    if (!item) return false;
    return (
      <div className="draggablecard-container">
        <div
          className="draggablecard"
          style={getDraggableCardStyles(currentoffset)}>
          <div className="kanban-card relative">
            <AbstractCard minify nostatus item={item} />
          </div>
        </div>
      </div>
    );
  }
}

DraggableCard.defaultProps = {
  item: null,
};

DraggableCard.propTypes = {
  currentoffset: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  item: PropTypes.object,
};

const collect = monitor => ({
  currentoffset: monitor.getSourceClientOffset() || { x: 0, y: 0 },
  item: monitor.getItem(),
});

export default DragLayer(collect)(DraggableCard);
