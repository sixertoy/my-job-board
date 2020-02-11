import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

import KanbanBoardCard from './kanban-board-card';
import KanbanBoardFooter from './kanban-board-footer';
import KanbanBoardHeader from './kanban-board-header';
import { ItemType } from './prop-types';
import { stylesheet, theme } from './styles';

const useStyles = createUseStyles({
  container: {
    backgroundColor: theme.column.background,
    borderRadius: '3px',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 4px 0 4px',
    minWidth: '300px',
    width: 'auto',
  },
  wrapper: {
    ...stylesheet.isScrollableY,
    ...stylesheet.customScrollbar(),
    flex: '1 1 0%',
    marginRight: '4px',
    padding: '0 4px 0 8px',
  },
});

const KanbanBoardColumn = ({
  addCardHandler,
  items,
  label,
  render,
  status,
}) => {
  const classes = useStyles();
  const filtered = items.filter(obj => obj.status === status);
  const count = filtered.length;
  return (
    <div className={classes.container}>
      <KanbanBoardHeader count={count} label={label} />
      <div className={classes.wrapper}>{filtered.map(render)}</div>
      <KanbanBoardFooter onClick={addCardHandler} />
    </div>
  );
};

KanbanBoardColumn.defaultProps = {
  addCardHandler: null,
  items: [],
  render: item => <KanbanBoardCard key={item.id} item={item} />,
};

KanbanBoardColumn.propTypes = {
  addCardHandler: PropTypes.func,
  items: PropTypes.arrayOf(ItemType),
  label: PropTypes.string.isRequired,
  render: PropTypes.func,
  status: PropTypes.string.isRequired,
};

export default KanbanBoardColumn;
