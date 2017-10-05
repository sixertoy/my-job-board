import React from 'react';
import PropTypes from 'prop-types';

// application
import './column.css';
import List from './List';

const BoardColumn = ({ title, items }) => (
  <div className="board-column">
    <h2 className="board-column-header">
      <span>{title}</span>
    </h2>
    <List items={items} />
    <div className="board-column-footer" />
  </div>
);

BoardColumn.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default BoardColumn;
