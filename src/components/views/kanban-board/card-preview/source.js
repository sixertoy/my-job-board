import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const styles = theme => ({
  container: ({ theme: name }) => ({
    backgroundColor: theme.colors[name].button,
    borderRadius: 4,
    composes: ['p7', 'fs14', 'mb12', 'text-center'],
  }),
  label: ({ theme: name }) => ({
    color: theme.colors[name].color,
  }),
});

const KanbanBoardCardPreviewSourceComponent = ({ classes, link, origin }) => (
  <div className={classes.container}>
    <Link to={link}>
      <span className={classes.label}>Voir l&apos;offre sur &nbsp;</span>
      <span className={classes.label}>{origin}</span>
    </Link>
  </div>
);

KanbanBoardCardPreviewSourceComponent.defaultProps = {};

KanbanBoardCardPreviewSourceComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  link: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
};

export default withStyles(styles)(KanbanBoardCardPreviewSourceComponent);
