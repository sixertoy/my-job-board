import PropTypes from 'prop-types';
import React from 'react';
import { Field, Form } from 'react-final-form';
import { FaSave } from 'react-icons/fa';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    composes: ['p12'],
    maxWidth: 320,
    minWidth: 320,
    width: 320,
  },
  error: {
    color: '#FF0000',
    composes: ['is-block', 'mt5'],
  },
  field: {
    '& input': {
      border: '1px solid #000',
      borderRadius: 4,
      display: 'block',
      fontSize: 12,
      padding: '3px 7px',
      width: '100%',
    },
    width: '100%',
  },
  form: {},
  label: {
    composes: ['is-block', 'mb5', 'is-bold'],
  },
  submit: {
    composes: ['is-block', 'mt5', 'is-full-width'],
  },
});

const validateProjectTitle = titles => value => {
  const nameExists = value && titles.includes(value);
  return nameExists ? 'Changer de nom' : undefined;
};

const ProjectsContextMenuComponent = ({ addProjectHandler, titles }) => {
  const classes = useStyles();
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
                      <label className={classes.field}>
                        <span className={classes.label}>Nouv. projet</span>
                        <input {...input} placeholder="Title" type="text" />
                        {hasError && (
                          <span className={classes.error}>{meta.error}</span>
                        )}
                      </label>
                    );
                  }}
                  validate={validateProjectTitle(titles)}
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
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectsContextMenuComponent;
