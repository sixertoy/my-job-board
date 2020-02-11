import React from 'react';
import { createUseStyles } from 'react-jss';

import { ItemType } from './prop-types';
import { theme } from './styles';

const useStyles = createUseStyles({
  card: {
    backgroundColor: theme.card.background,
    borderRadius: 3,
    boxShadow: '0 1px 0 rgba(9, 30, 66, 0.25)',
    color: theme.card.color,
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    marginBottom: 8,
    padding: '6px 8px',
    userSelect: 'none',
  },
});

const KanbanBoardCard = ({ item }) => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <div>{item.title}</div>
    </div>
  );
};

KanbanBoardCard.propTypes = {
  item: ItemType.isRequired,
};

export default KanbanBoardCard;
