import React from 'react';
import { useDrag } from 'react-dnd';
import { createUseStyles, useTheme } from 'react-jss';

import { DRAG_CARD_TYPE } from './constants';
import { ItemType } from './prop-types';

const useStyles = createUseStyles({
  card: {
    backgroundColor: ({ theme }) => theme.cardBackground,
    borderRadius: 3,
    boxShadow: '0 1px 0 rgba(9, 30, 66, 0.25)',
    color: ({ theme }) => theme.cardColor,
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    marginBottom: 8,
    padding: '6px 8px',
    userSelect: 'none',
  },
});

const KanbanBoardCard = ({ item }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const [{ isDragging }, drag] = useDrag({
    collect: monitor => ({ isDragging: !!monitor.isDragging() }),
    item: { id: item.id, status: item.status, type: DRAG_CARD_TYPE },
  });
  return (
    <div
      ref={drag}
      className={classes.card}
      style={{ opacity: isDragging ? 0.5 : 1 }}>
      <div>{item.title}</div>
    </div>
  );
};

KanbanBoardCard.propTypes = {
  item: ItemType.isRequired,
};

export default KanbanBoardCard;
