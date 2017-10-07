import find from 'lodash.find';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import React, { Component } from 'react';

// application
import './column.css';
import Card from './Card';

class BoardColumn extends Component {
  render () {
    const {
      type,
      title,
      items,
      isOver,
      // canDrop,
      // itemType,
      // isOverCurrent,
      connectDropTarget } = this.props;
    // console.log('canDrop', canDrop);
    return connectDropTarget(
      <div className={`board-column ${type} ${!isOver ? '' : 'hovered'}`}>
        <h2 className="board-column-header">
          <span>{title}</span>
        </h2>
        <div className="board-column-list fancy-scrollbar"
          style={{ height: 'auto', opacity: (isOver ? 0.45 : 1) }}>
          {!items || !items.length
            ? false
            : items.map((obj, index) =>
              (<Card item={obj} source={type}
                // eslint-disable-next-line react/no-array-index-key
                key={`kanban-column-item-${index}`} />))}
        </div>
        <div className="board-column-footer" />
      </div>
    );
  }
}

BoardColumn.propTypes = {
  type: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  isOver: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  // canDrop: PropTypes.bool.isRequired,
  connectDropTarget: PropTypes.func.isRequired
};

const dropTargetContext = ({
  drop: props => ({ target: props.type }),
  canDrop: (props, monitor) => {
    const id = monitor.getItem().id;
    const exists = find(props.items, { id });
    return !exists;
  }
  // hover: (props, monitor) => {
  //   // console.log('hover', monitor.getItem());
  // }
});

export default DropTarget(
  'board-card',
  dropTargetContext,
  (connect, monitor) => ({
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
    connectDropTarget: connect.dropTarget()
    // if drop target is nested in main view component
    // isOverCurrent: monitor.isOver({ shallow: true })
  })
)(BoardColumn);
