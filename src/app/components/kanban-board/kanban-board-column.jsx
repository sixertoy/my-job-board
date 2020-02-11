import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import KanbanBoardCard from './kanban-board-card';
import KanbanBoardFooter from './kanban-board-footer';
import KanbanBoardHeader from './kanban-board-header';
import { ItemType } from './prop-types';

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
    composes: ['kanban-scrollbar'],
    overflowX: 'hidden',
    overflowY: 'auto',
    paddingRight: 4,
  },
  wrapper: {
    backgroundColor: ({ theme }) => theme.columnBackground,
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
  const theme = useTheme();
  const classes = useStyles({ theme });
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
