import React from 'react';
import PropTypes from 'prop-types';

// application
import FeedItem from './FeedItem';

const KanbanColumn = ({ title, items }) => (
  <div className="kanban-column">
    <h2 className="kanban-column-title">
      <span>{title}</span>
    </h2>
    <div className="kanban-column-items fancy-scrollbar">
      {items.map((obj, index) =>
        // eslint-disable-next-line react/no-array-index-key
        <FeedItem {...obj} key={`kanban-column-item-${index}`} />)}
    </div>
  </div>
);

KanbanColumn.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default KanbanColumn;
