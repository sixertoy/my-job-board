import { withStyles } from '@iziges/napper-react';
import PropTypes from 'prop-types';
import React from 'react';
import { MdNote } from 'react-icons/md';

const styles = {
  note: {
    maxWidth: 230,
    minWidth: 230,
    width: 230,
  },
};

const NoteComponent = ({ classes, item }) => (
  <div className={classes.note}>
    <MdNote />
    <span>{item.title}</span>
  </div>
);

NoteComponent.defaultProps = {};

NoteComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  item: PropTypes.shape().isRequired,
};

export default withStyles(styles)(NoteComponent);
