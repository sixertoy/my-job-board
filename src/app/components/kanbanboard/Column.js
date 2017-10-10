import find from 'lodash.find';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import React, { Component } from 'react';

// application
import './column.css';
import Card from './Card';

const styles = {
  count: {
    fontSize: '0.7em',
    fontWeight: 'lighter'
  }
};

// FIXME ->
// pourquoi un obj est egal a null
const renderBoardCard = (obj, type) => obj && (
  <Card item={obj} source={type}
    // eslint-disable-next-line react/no-array-index-key
    key={`kanban-column-item-${obj.id}`} />
);

class BoardColumn extends Component {

  render () {
    const {
      type,
      title,
      items,
      isOver,
      showcount,
      connectDropTarget } = this.props;
    return connectDropTarget(
      <div className={`board-column ${type} ${!isOver ? '' : 'hovered'}`}>
        <h2 className="board-column-header">
          <span>{title}</span>
          {!showcount ? false
            : <small style={styles.count}>{` (${items.length})`}</small>}
        </h2>
        <div className="board-column-list fancy-scrollbar"
          style={{ height: 'auto', opacity: (isOver ? 0.45 : 1) }}>
          {!items || !items.length ? false
            : items.map(obj => renderBoardCard(obj, type))}
        </div>
        <div className="board-column-footer" />
      </div>
    );
  }
}

BoardColumn.defaultProps = {
  showcount: false
};

BoardColumn.propTypes = {
  showcount: PropTypes.bool,
  type: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  isOver: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  connectDropTarget: PropTypes.func.isRequired
};

const dropTargetContext = ({
  drop: props => ({ target: props.type }),
  canDrop: (props, monitor) => {
    const id = monitor.getItem().id;
    const exists = find(props.items, { id });
    return !exists;
  }
});

export default DropTarget(
  'board-card',
  dropTargetContext,
  (connect, monitor) => ({
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
    connectDropTarget: connect.dropTarget()
  })
)(BoardColumn);
