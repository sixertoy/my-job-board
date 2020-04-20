import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

import ProjectCardComponent from './card';

const useStyles = createUseStyles({
  grid: {
    composes: ['flex-columns', 'flex-wrap'],
  },
});

const GridComponent = ({ deleteProjectHandler, pathname, projects }) => {
  const classes = useStyles();
  return (
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
};

GridComponent.defaultProps = {};

GridComponent.propTypes = {
  deleteProjectHandler: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default GridComponent;
