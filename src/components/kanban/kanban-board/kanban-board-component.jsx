import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';

const styles = {
  container: {
    composes: ['is-full-layout', 'no-overflow', 'mx5', 'py10'],
  },
};

const KanbanBoardComponent = ({ classes }) => {
  return <div className={classes.container} />;
};

KanbanBoardComponent.defaultProps = {};

KanbanBoardComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(KanbanBoardComponent);
