import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

import GridComponent from './grid';

const useStyles = createUseStyles({
  container: {
    composes: ['is-full-width', 'scroll-y'],
  },
});

const ProjectsComponent = ({ deleteProjectHandler, pathname, projects }) => {
  const classes = useStyles();
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
  deleteProjectHandler: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default ProjectsComponent;
