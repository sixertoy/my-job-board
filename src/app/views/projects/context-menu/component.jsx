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
    '& > span.error': {
      display: 'block',
      fontWeight: 'bold',
      marginBottom: 5,
    },
    '& > span.label': {
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

const validateProjectTitle = existingTitles => value => {
  const nameExists = value && existingTitles.includes(value);
  return nameExists ? 'Changer de nom' : undefined;
};

const ProjectsContextMenuComponent = ({
  addProjectHandler,
  classes,
  existingTitles,
}) => {
  return (
    <Form
      render={({
        form,
        handleSubmit,
        hasValidationErrors,
        pristine,
        submitting,
      }) => {
        return (
          <div className={classes.container}>
            <form onSubmit={evt => handleSubmit(evt).then(form.reset)}>
              <div className={classes.form}>
                <Field
                  name="project.title"
                  render={({ input, meta }) => {
                    const hasError = meta.error && !meta.pristine;
                    return (
                      <label className={classes.formlabel}>
                        <span classes={classes.label}>Nouv. projet</span>
                        <input {...input} placeholder="Title" type="text" />
                        {hasError && (
                          <span className={classes.error}>{meta.error}</span>
                        )}
                      </label>
                    );
                  }}
                  validate={validateProjectTitle(existingTitles)}
                />
                <button
                  className={classes.submit}
                  disabled={hasValidationErrors || submitting || pristine}
                  type="submit">
                  <FaSave />
                </button>
              </div>
            </form>
          </div>
        );
      }}
      onSubmit={addProjectHandler}
    />
  );
};

ProjectsContextMenuComponent.defaultProps = {};

ProjectsContextMenuComponent.propTypes = {
  addProjectHandler: PropTypes.func.isRequired,
  classes: PropTypes.shape().isRequired,
  existingTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(ProjectsContextMenuComponent);
