import React from 'react';
import { createUseStyles } from 'react-jss';

import { ItemType } from './prop-types';
import { theme } from './styles';

const useStyles = createUseStyles({
  container: {
    backgroundColor: theme.card.background,
    borderRadius: '3px',
    boxShadow: theme.shadow,
    color: theme.card.color,
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    marginBottom: '8px',
    padding: '6px 8px',
    userSelect: 'none',
  },
});

const KanbanBoardCard = ({ item }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>{item.title}</div>
    </div>
  );
};

KanbanBoardCard.propTypes = {
  item: ItemType.isRequired,
};

export default KanbanBoardCard;
