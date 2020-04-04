import { withStyles } from '@iziges/napper-react';
import PropTypes from 'prop-types';
import React from 'react';

import GridComponent from './grid';

const styles = {
  container: {
    composes: ['is-full-width', 'scroll-y'],
  },
};

const ProjectsComponent = ({
  classes,
  deleteProjectHandler,
  pathname,
  projects,
}) => {
  return (
    <div className={classes.container}>
      <GridComponent
        deleteProjectHandler={deleteProjectHandler}
        pathname={pathname}
        projects={projects}
      />
    </div>
  );
};

ProjectsComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  deleteProjectHandler: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default withStyles(styles)(ProjectsComponent);
