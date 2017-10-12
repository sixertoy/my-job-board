/* eslint
  react/no-danger: 0 */
import PropTypes from 'prop-types';
import { DragLayer } from 'react-dnd';
import React, { Component } from 'react';

// application
import './draggablecard.css';
import AbstractCard from './AbstractCard';

function getDraggableCardStyles (currentoffset) {
  const { x, y } = currentoffset;
  const isabsolutezero = (x <= 0 && y <= 0);
  if (!currentoffset || isabsolutezero) {
    return ({ display: 'none', visibility: 'hidden' });
  }
  return { transform: `translate(${x}px, ${y}px)` };
}

// eslint-disable-next-line react/prefer-stateless-function
class DraggableCard extends Component {

  render () {
    const {
      item,
      currentoffset } = this.props;
    return (
      <div className="draggablecard-container">
        <div className="draggablecard"
          style={getDraggableCardStyles(currentoffset)}>
          <div className={'kanban-card relative'}>
            <AbstractCard nostatus minify item={item} />
          </div>
        </div>
      </div>
    );
  }
}

DraggableCard.propTypes = {
  item: PropTypes.object.isRequired,
  currentoffset: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired
};

const collect = monitor => ({
  item: monitor.getItem() || {},
  currentoffset: monitor.getSourceClientOffset() || { x: 0, y: 0 }
});

export default DragLayer(
  collect
)(DraggableCard);
