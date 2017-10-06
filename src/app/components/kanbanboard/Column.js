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
      connectDropTarget } = this.props;
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
  connectDropTarget: PropTypes.func.isRequired
};

const droptargetTarget = ({});

const droptargetCollect = (connect, monitor) => ({
  isOver: monitor.isOver(),
  connectDropTarget: connect.dropTarget()
});

export default DropTarget(
  'board-column',
  droptargetTarget,
  droptargetCollect
)(BoardColumn);
