import React from 'react';
import PropTypes from 'prop-types';

// application
import './kanbancolumn.css';
import CardsContainer from './CardsContainer';

const KanbanColumn = ({
  title,
  items
}) => (
  <div className="kanban-column">
    <h2 className="kanban-column-header">
      <span>{title}</span>
    </h2>
    <CardsContainer items={items} />
    <div className="kanban-column-footer" />
  </div>
);

KanbanColumn.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default KanbanColumn;
