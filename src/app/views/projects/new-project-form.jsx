import { withStyles } from '@iziges/napper-react';
import PropTypes from 'prop-types';
import React from 'react';
import { Field, Form } from 'react-final-form';

const styles = {
  container: {},
  grid: {
    composes: ['flex-columns', 'flex-wrap', 'is-full-width'],
  },
};

const NewProjectForm = ({ addProjectHandler }) => (
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
);

NewProjectForm.propTypes = {
  addProjectHandler: PropTypes.func.isRequired,
};

export default withStyles(styles)(NewProjectForm);
