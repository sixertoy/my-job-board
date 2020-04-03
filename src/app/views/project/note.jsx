import { withStyles } from '@iziges/napper-react';
import PropTypes from 'prop-types';
import React from 'react';

const styles = () => ({
  container: {},
});

const NoteComponent = ({ classes, item }) => (
  <div className={classes.container}>{item.title}</div>
);

NoteComponent.defaultProps = {};

NoteComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  item: PropTypes.shape().isRequired,
};

export default withStyles(styles)(NoteComponent);
