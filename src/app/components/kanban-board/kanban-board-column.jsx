import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

import KanbanBoardCard from './kanban-board-card';
import KanbanBoardFooter from './kanban-board-footer';
import KanbanBoardHeader from './kanban-board-header';
import { ItemType } from './prop-types';
import { stylesheet, theme } from './styles';

const useStyles = createUseStyles({
  cards: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    height: 'auto',
    maxHeight: '100%',
    overflow: 'hidden',
    paddingLeft: 4,
    paddingRight: 4,
  },
  column: {
    height: 'auto',
    margin: '0 4px 0 4px',
    maxHeight: '100%',
    minWidth: 300,
    overflow: 'hidden',
    width: 'auto',
  },
  list: {
    paddingRight: 4,
    ...stylesheet.isScrollableY,
    ...stylesheet.customScrollbar(),
  },
  wrapper: {
    backgroundColor: theme.column.background,
    borderRadius: 3,
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    maxHeight: '100%',
    overflow: 'hidden',
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
    <div className={classes.column}>
      <div className={classes.wrapper}>
        <KanbanBoardHeader count={count} label={label} />
        <div className={classes.cards}>
          <div className={classes.list}>{filtered.map(render)}</div>
        </div>
        <KanbanBoardFooter onClick={addCardHandler} />
      </div>
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
