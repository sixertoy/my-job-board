import { withStyles } from '@iziges/napper-react';
import PropTypes from 'prop-types';
import React from 'react';
import { Field, Form } from 'react-final-form';

import ProjectComponent from './item';

const styles = {
  container: {
    composes: ['is-full-width'],
  },
  grid: {
    composes: ['flex-columns', 'flex-wrap', 'is-full-width'],
  },
};

const ProjectsComponent = ({
  addProjectHandler,
  classes,
  deleteProjectHandler,
  projects,
}) => {
  return (
    <div className={classes.container}>
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
          <ProjectComponent
            key={proj.id}
            data={proj}
            onDelete={deleteProjectHandler}
          />
        ))}
      </div>
    </div>
  );
};

ProjectsComponent.propTypes = {
  addProjectHandler: PropTypes.func.isRequired,
  classes: PropTypes.shape().isRequired,
  deleteProjectHandler: PropTypes.func.isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default withStyles(styles)(ProjectsComponent);
