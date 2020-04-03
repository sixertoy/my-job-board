import { withStyles } from '@iziges/napper-react';
import PropTypes from 'prop-types';
import React from 'react';
import { Field, Form } from 'react-final-form';
import { FaSave } from 'react-icons/fa';

const styles = {
  container: {
    composes: ['p12'],
    maxWidth: 320,
    minWidth: 320,
    width: 320,
  },
  form: {},
  formlabel: {
    '& > input': {
      border: '1px solid #000',
      borderRadius: 4,
      display: 'block',
      fontSize: 12,
      padding: '3px 7px',
      width: '100%',
    },
    '& > span': {
      display: 'block',
      fontWeight: 'bold',
      marginBottom: 5,
    },
    width: '100%',
  },
  submit: {
    display: 'block',
    marginTop: 5,
    width: '100%',
  },
};

const ProjectsContextMenuComponent = ({ addProjectHandler, classes }) => (
  <Form
    render={({ form, handleSubmit, pristine, submitting }) => (
      <div className={classes.container}>
        <form onSubmit={evt => handleSubmit(evt).then(form.reset)}>
          <div className={classes.form}>
            <label className={classes.formlabel} htmlFor="project.title">
              <span>Nouv. projet</span>
              <Field component="input" name="project.title" type="text" />
            </label>
            <button
              className={classes.submit}
              disabled={submitting || pristine}
              type="submit">
              <FaSave />
            </button>
          </div>
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
