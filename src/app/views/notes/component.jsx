import { withStyles } from '@iziges/napper-react';
import PropTypes from 'prop-types';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotesGridComponent from './grid';
import PreviewNoteComponent from './preview';

const styles = {
  container: {
    composes: ['is-full-layout'],
  },
};

const ReactDumbComponent = ({ classes }) => (
  <div className={classes.container}>
    <Switch>
      <Route exact component={NotesGridComponent} path="/notes" />
      <Route exact component={PreviewNoteComponent} path="/notes/:id" />
    </Switch>
  </div>
);

ReactDumbComponent.defaultProps = {};

ReactDumbComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(ReactDumbComponent);
