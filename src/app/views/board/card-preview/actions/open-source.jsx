import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

const useStyles = createUseStyles(theme => ({
  container: {
    backgroundColor: theme.colors.active,
    borderRadius: 4,
    composes: ['px7', 'py24', 'fs14', 'mb12', 'text-center'],
  },
  label: {
    color: theme.colors.white,
  },
}));

const KanbanBoardCardPreviewActionsComponent = ({ link, origin }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <Link to={link}>
        <span className={classes.label}>Voir l&apos;offre sur &nbsp;</span>
        <span className={classes.label}>{origin}</span>
      </Link>
    </div>
  );
};

KanbanBoardCardPreviewActionsComponent.propTypes = {
  link: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
};

export default KanbanBoardCardPreviewActionsComponent;
