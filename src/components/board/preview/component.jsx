import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';

const styles = {
  container: {
    width: '33%',
  },
};

const KanbanBoardPreviewComponent = ({ classes }) => {
  return <div className={classes.container} />;
};

KanbanBoardPreviewComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(KanbanBoardPreviewComponent);
