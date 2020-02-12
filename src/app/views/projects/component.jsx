import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';

import Grid from './grid';

const styles = {
  container: {
    composes: ['is-full-width'],
  },
};

const ProjectsComponent = ({ classes }) => (
  <div className={classes.container}>
    <Grid />
  </div>
);

ProjectsComponent.defaultProps = {};

ProjectsComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(ProjectsComponent);
