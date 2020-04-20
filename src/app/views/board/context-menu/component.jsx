import PropTypes from 'prop-types';
import React from 'react';
import { Field, Form } from 'react-final-form';
import { FaSave, FaTrash } from 'react-icons/fa';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    composes: ['p12'],
    maxWidth: 240,
    minWidth: 240,
    width: 240,
  },
  delete: {
    composes: ['fs11'],
  },
  input: {
    composes: ['flex-columns'],
  },
  source: {
    composes: ['flex-columns', 'flex-between'],
  },
  title: {
    composes: ['mb12', 'is-bold'],
  },
});

const BoardContextMenuComponent = ({ addFeedHandler, feeds }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <div className={classes.title}>Ajouter un Flux</div>
        <Form
          render={({ form, handleSubmit, pristine, submitting }) => (
            <form onSubmit={handleSubmit}>
              <div className={classes.input}>
                <Field component="input" name="url" type="text" />
                <button
                  disabled={submitting || pristine}
                  type="button"
                  onClick={handleSubmit}>
                  <FaSave />
                </button>
              </div>
            </form>
          )}
          onSubmit={addFeedHandler}
        />
      </div>
      <div>
        <div className={classes.title}>Tous les Flux</div>
        {Object.keys(feeds).map(key => {
          return (
            <div key={key} className={classes.source}>
              <span className={classes.label}>{key}</span>
              <button
                className={classes.delete}
                type="button"
                onClick={() => {}}>
                <FaTrash />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

BoardContextMenuComponent.propTypes = {
  addFeedHandler: PropTypes.func.isRequired,
  feeds: PropTypes.shape().isRequired,
};

export default BoardContextMenuComponent;
