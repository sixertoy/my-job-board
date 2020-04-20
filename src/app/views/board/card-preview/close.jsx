import React from 'react';
import { IoMdCloseCircle } from 'react-icons/io';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

const useStyles = createUseStyles(theme => ({
  container: {
    '&:hover': {
      color: theme.colors.active,
    },
    color: theme.colors.button,
    composes: ['is-absolute', 'fs24'],
    right: 12,
    top: 12,
    transition: 'color 0.5s',
  },
}));

const KanbanBoardCardPreviewCloseComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <Link className={classes.container} to="/board">
      <IoMdCloseCircle />
    </Link>
  );
};

export default KanbanBoardCardPreviewCloseComponent;
