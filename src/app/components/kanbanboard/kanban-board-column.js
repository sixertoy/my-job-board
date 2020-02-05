// application
import './boardcolumn.css';

import find from 'lodash.find';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

import BoardCard from './BoardCard';

const styles = {
  count: {
    fontSize: '0.7em',
    fontWeight: 'lighter',
  },
};

// FIXME ->
// pourquoi un obj est egal a null
const renderBoardCard = (obj, type) =>
  obj && (
    <BoardCard
      key={`kanban-column-item-${obj.id}`}
      item={obj}
      // eslint-disable-next-line react/no-array-index-key
      source={type}
    />
  );

class BoardColumn extends Component {
  render() {
    const {
      canfilter,
      connectDropTarget,
      isOver,
      items,
      search,
      showcount,
      title,
      type,
    } = this.props;
    return connectDropTarget(
      <div className={`board-column ${type} ${!isOver ? '' : 'hovered'}`}>
        <h2 className="board-column-header">
          <span>{title}</span>
          {!showcount ? (
            false
          ) : (
            <small style={styles.count}>{` (${items.length})`}</small>
          )}
        </h2>
        {!canfilter ? (
          false
        ) : (
          <div className="flex-columns" id="searchinput">
            <i className="myjobboard-search" />
            <input
              placeholder="Filter"
              type="text"
              value={search}
              onChange={({ target }) =>
                search === target.value ? false : canfilter(target.value)
              }
            />
          </div>
        )}
        <div
          className="board-column-list fancy-scrollbar"
          style={{ height: 'auto', opacity: isOver ? 0.45 : 1 }}>
          {!items || !items.length
            ? false
            : items.map(obj => renderBoardCard(obj, type))}
        </div>
        <div className="board-column-footer" />
      </div>
    );
  }
}

BoardColumn.defaultProps = {
  canfilter: false,
  search: '',
  showcount: false,
};

BoardColumn.propTypes = {
  canfilter: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  search: PropTypes.string,
  showcount: PropTypes.bool,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

const dropTargetContext = {
  canDrop: (props, monitor) => {
    const { id } = monitor.getItem();
    const exists = find(props.items, { id });
    return !exists;
  },
  drop: props => ({ target: props.type }),
};

export default DropTarget(
  'board-card',
  dropTargetContext,
  (connect, monitor) => ({
    canDrop: monitor.canDrop(),
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  })
)(BoardColumn);
