import { withStyles } from '@iziges/napper-react';
import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProjectComponent from '../project';
import ProjectCardComponent from './project-card';

const styles = {
  container: {
    composes: ['is-full-width'],
  },
  grid: {
    composes: ['flex-columns', 'flex-wrap'],
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
      <Switch>
        <Route
          exact
          component={ProjectComponent}
          path="/projects/:id/:view(notes|todos)?"
        />
        <Route
          exact
          path="/projects"
          render={() => (
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
          )}
        />
      </Switch>
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
