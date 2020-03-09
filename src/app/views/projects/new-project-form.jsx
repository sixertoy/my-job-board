import { withStyles } from '@iziges/napper-react';
import PropTypes from 'prop-types';
import React from 'react';
import { Field, Form } from 'react-final-form';

import ProjectGridItemComponent from './project-grid-item';

const styles = {
  container: {},
  grid: {
    composes: ['flex-columns', 'flex-wrap', 'is-full-width'],
  },
};

const NewProjectForm = ({
  addProjectHandler,
  classes,
  deleteProjectHandler,
  pathname,
  projects,
}) => (
  <React.Fragment>
    <Form
      render={({ form, handleSubmit, pristine, submitting }) => {
        const submitIsDisabled = submitting || pristine;
        return (
          <form onSubmit={handleSubmit}>
            <div>
              <Field
                component="input"
                name="project.title"
                placeholder="Project title"
                type="text"
              />
              <Field
                component="input"
                name="project.description"
                placeholder="Project description"
                type="text"
              />
              <button disabled={submitIsDisabled} type="submit">
                <span>Add Project</span>
              </button>
            </div>
          </form>
        );
      }}
      onSubmit={addProjectHandler}
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
);

NewProjectForm.propTypes = {
  addProjectHandler: PropTypes.func.isRequired,
  classes: PropTypes.shape().isRequired,
  deleteProjectHandler: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default withStyles(styles)(NewProjectForm);
