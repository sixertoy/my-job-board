import { withStyles } from '@iziges/napper-react';
import PropTypes from 'prop-types';
import React from 'react';

import ProjectCardComponent from './card';

const styles = {
  grid: {
    composes: ['flex-columns', 'flex-wrap'],
  },
};

const GridComponent = ({
  classes,
  deleteProjectHandler,
  pathname,
  projects,
}) => (
  <div className={classes.grid}>
    {projects.map(proj => (
      <ProjectCardComponent
        key={proj.id}
        data={proj}
        pathname={pathname}
        onDelete={deleteProjectHandler}
      />
    ))}
  </div>
);

GridComponent.defaultProps = {};

GridComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  deleteProjectHandler: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default withStyles(styles)(GridComponent);
