import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  container: {
    backgroundColor: theme.colors.danger,
    borderRadius: 4,
    composes: ['p7', 'fs14', 'mb12', 'text-center'],
  },
  label: {
    color: theme.colors.white,
  },
}));

const KanbanBoardCardPreviewDeleteComponent = ({ onClick }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <button type="button" onClick={onClick}>
        <span className={classes.label}>Supprimer</span>
      </button>
    </div>
  );
};

KanbanBoardCardPreviewDeleteComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default KanbanBoardCardPreviewDeleteComponent;
