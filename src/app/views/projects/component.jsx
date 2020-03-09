import { withStyles } from '@iziges/napper-react';
import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProjectComponent from '../project';
import NewProjectForm from './new-project-form';

const styles = {
  container: {
    composes: ['is-full-width'],
  },
};

const ProjectsComponent = ({
  addProjectHandler,
  classes,
  deleteProjectHandler,
  pathname,
  projects,
}) => {
  return (
    <div className={classes.container}>
      <Switch>
        <Route exact component={ProjectComponent} path="/projects/:id" />
        <Route
          exact
          path="/projects"
          render={() => (
            <NewProjectForm
              addProjectHandler={addProjectHandler}
              deleteProjectHandler={deleteProjectHandler}
              pathname={pathname}
              projects={projects}
            />
          )}
        />
      </Switch>
    </div>
  );
};

ProjectsComponent.propTypes = {
  addProjectHandler: PropTypes.func.isRequired,
  classes: PropTypes.shape().isRequired,
  deleteProjectHandler: PropTypes.func.isRequired,
  location: PropTypes.shape().isRequired,
  pathname: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default withStyles(styles)(ProjectsComponent);
