import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import React, { Component } from 'react';

// application
import './column.css';
import Card from './Card';

class BoardColumn extends Component {
  render () {
    const {
      title,
      items,
      isOver,
      canDrop,
      itemType,
      isOverCurrent,
      connectDropTarget } = this.props;
    console.log('isOver', isOver);
    console.log('canDrop', canDrop);
    console.log('itemType', itemType);
    console.log('isOverCurrent', isOverCurrent);
    return connectDropTarget(
      <div className="board-column">
        <h2 className="board-column-header">
          <span>{title}</span>
        </h2>
        <div className="board-column-list fancy-scrollbar"
          style={{ height: 'auto', opacity: (isOver ? 0.45 : 1) }}>
          {!items || !items.length
            ? false
            : items.map((obj, index) =>
              // eslint-disable-next-line react/no-array-index-key
              <Card {...obj} key={`kanban-column-item-${index}`} />)}
        </div>
        <div className="board-column-footer" />
      </div>
    );
  }
}

BoardColumn.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool.isRequired,
  itemType: PropTypes.string.isRequired,
  isOverCurrent: PropTypes.bool.isRequired,
  connectDropTarget: PropTypes.func.isRequired
};

const dropTargetContext = ({
  drop: (props, monitor, component) => {
    console.log('drop drop drop drop');
  },
  canDrop: (props, monitor) => {
    console.log('canDrop canDrop canDrop canDrop');
  },
  hover: (props, monitor, component) => {
    console.log('hover hover hover hover');
  }
});

export default DropTarget(
  'board-column',
  dropTargetContext,
  (connect, monitor) => ({
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType() || '',
    connectDropTarget: connect.dropTarget(),
    isOverCurrent: monitor.isOver({ shallow: true })
  })
)(BoardColumn);
