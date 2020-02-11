import PropTypes from 'prop-types';
import React from 'react';
import { useDrop } from 'react-dnd';
import { createUseStyles, useTheme } from 'react-jss';

import { DRAG_CARD_TYPE } from './constants';
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
    '&.can-drop': {
      backgroundColor: 'yellow',
    },
    composes: ['kanban-scrollbar'],
    minHeight: 40,
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
  addCardToListHandler,
  cardDroppedHandler,
  items,
  label,
  listCanBeEdited,
  render,
  status,
}) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: DRAG_CARD_TYPE,
    canDrop: ({ status: itemStatus }) => status !== itemStatus,
    collect: monitor => ({
      canDrop: !!monitor.canDrop(),
      isOver: !!monitor.isOver(),
    }),
    drop: ({ id }) => cardDroppedHandler(id, status),
  });
  const filtered = items.filter(obj => obj.status === status);
  const overclass = (canDrop && isOver && 'can-drop') || '';
  const listClassname = `${classes.list} ${overclass}`;
  return (
    <div ref={drop} className={classes.column}>
      <div className={classes.wrapper}>
        <KanbanBoardHeader count={filtered.length} label={label} />
        <div className={classes.cards}>
          <div className={listClassname}>{filtered.map(render)}</div>
        </div>
        <KanbanBoardFooter
          listCanBeEdited={listCanBeEdited}
          onClick={addCardToListHandler}
        />
      </div>
    </div>
  );
};

KanbanBoardColumn.defaultProps = {
  addCardToListHandler: null,
  items: [],
  render: item => <KanbanBoardCard key={item.id} item={item} />,
};

KanbanBoardColumn.propTypes = {
  addCardToListHandler: PropTypes.func,
  cardDroppedHandler: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(ItemType),
  label: PropTypes.string.isRequired,
  listCanBeEdited: PropTypes.bool.isRequired,
  render: PropTypes.func,
  status: PropTypes.string.isRequired,
};

export default KanbanBoardColumn;
