import { withStyles } from '@iziges/napper-react';
import PropTypes from 'prop-types';
import React from 'react';
import { Field, Form } from 'react-final-form';

const styles = {
  container: {
    composes: ['is-full-width'],
  },
  grid: {
    composes: ['flex-columns', 'flex-wrap', 'is-full-width'],
  },
  inner: {
    border: '1px solid #000000',
    borderRadius: 4,
    composes: ['is-full-height'],
  },
  project: {
    height: 100,
    margin: '1%',
    width: '23%',
  },
};

const ProjectsComponent = ({ addProjectHandler, classes, projects }) => {
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
                  name="title"
                  placeholder="Project title"
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
        {projects.map(proj => {
          return (
            <div key={proj.id} className={classes.project}>
              <div className={classes.inner}>{proj.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

ProjectsComponent.propTypes = {
  addProjectHandler: PropTypes.func.isRequired,
  classes: PropTypes.shape().isRequired,
  projects: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default withStyles(styles)(ProjectsComponent);
