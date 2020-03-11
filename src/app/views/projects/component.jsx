import { withStyles } from '@iziges/napper-react';
import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProjectComponent from '../project';
import NewProjectForm from './new-project-form';
import ProjectGridItemComponent from './project-grid-item';

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
        <Route
          exact
          component={ProjectComponent}
          path="/projects/:id/:view(notes|todos)?"
        />
        <Route
          exact
          path="/projects"
          render={() => (
            <React.Fragment>
              <NewProjectForm
                addProjectHandler={addProjectHandler}
                deleteProjectHandler={deleteProjectHandler}
                pathname={pathname}
                projects={projects}
              />
              <div className={classes.grid}>
                {projects.map(proj => (
                  <ProjectGridItemComponent
                    key={proj.id}
                    data={proj}
                    pathname={pathname}
                    onDelete={deleteProjectHandler}
                  />
                ))}
              </div>
            </React.Fragment>
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
  pathname: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default withStyles(styles)(ProjectsComponent);
