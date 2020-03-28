import { withStyles } from '@iziges/napper-react';
import PropTypes from 'prop-types';
import React from 'react';
import { Field, Form } from 'react-final-form';
import { FaSave } from 'react-icons/fa';

const styles = {
  container: {
    composes: ['p12'],
    maxWidth: 240,
    minWidth: 240,
    width: 240,
  },
};

const ProjectsContextMenuComponent = ({ addProjectHandler, classes }) => (
  <Form
    render={({ form, handleSubmit, pristine, submitting }) => (
      <div className={classes.container}>
        <form onSubmit={evt => handleSubmit(evt).then(form.reset)}>
          <label htmlFor="project.title">
            <span className="is-bold">Ajouter un projet</span>
            <Field component="input" name="project.title" type="text" />
          </label>
          <button disabled={submitting || pristine} type="submit">
            <FaSave />
          </button>
        </form>
      </div>
    )}
    onSubmit={addProjectHandler}
  />
);

ProjectsContextMenuComponent.defaultProps = {};

ProjectsContextMenuComponent.propTypes = {
  addProjectHandler: PropTypes.func.isRequired,
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(ProjectsContextMenuComponent);
