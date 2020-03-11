import { withStyles } from '@iziges/napper-react';
import PropTypes from 'prop-types';
import React from 'react';
import { Field, Form } from 'react-final-form';

const styles = {
  container: {},
};

const NewTodosForm = ({ classes, onSubmitHandler }) => (
  <div className={classes.container}>
    <Form
      render={({ handleSubmit, pristine, submitting }) => {
        const disabledSubmit = pristine || submitting;
        return (
          <form onSubmit={handleSubmit}>
            <Field
              component="input"
              name="title"
              placeholder="title"
              type="text"
            />
            <button disabled={disabledSubmit} type="submit">
              <span>save</span>
            </button>
          </form>
        );
      }}
      onSubmit={onSubmitHandler}
    />
  </div>
);

NewTodosForm.defaultProps = {};

NewTodosForm.propTypes = {
  classes: PropTypes.shape().isRequired,
  onSubmitHandler: PropTypes.func.isRequired,
};

export default withStyles(styles)(NewTodosForm);
