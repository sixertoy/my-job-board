import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';
import { Field, Form } from 'react-final-form';
import { FaSave, FaTrash } from 'react-icons/fa';

const styles = {
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
};

const BoardContextMenuComponent = ({ addFeedHandler, classes, feeds }) => (
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
            <button className={classes.delete} type="button" onClick={() => {}}>
              <FaTrash />
            </button>
          </div>
        );
      })}
    </div>
  </div>
);

BoardContextMenuComponent.defaultProps = {};

BoardContextMenuComponent.propTypes = {
  addFeedHandler: PropTypes.func.isRequired,
  classes: PropTypes.shape().isRequired,
  feeds: PropTypes.shape().isRequired,
};

export default withStyles(styles)(BoardContextMenuComponent);
