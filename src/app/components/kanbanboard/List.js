import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import React, { Component } from 'react';

// application
import './list.css';
import Card from './Card';

class List extends Component {
  render () {
    const {
      items,
      isOver,
      connectDropTarget } = this.props;
    // console.log('isOver', isOver);
    return connectDropTarget(
      <div className="kanban-list fancy-scrollbar"
        style={{ height: 'auto', opacity: (isOver ? 0.45 : 1) }}>
        {!items || !items.length
          ? false
          : items.map((obj, index) =>
            // eslint-disable-next-line react/no-array-index-key
            <Card {...obj} key={`kanban-column-item-${index}`} />)}
      </div>
    );
  }
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  isOver: PropTypes.bool.isRequired,
  connectDropTarget: PropTypes.func.isRequired
};

const droptargetTarget = ({});

const droptargetCollect = (connect, monitor) => ({
  isOver: monitor.isOver(),
  connectDropTarget: connect.dropTarget()
});

export default DropTarget(
  'cardscontainer',
  droptargetTarget,
  droptargetCollect
)(List);
