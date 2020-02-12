import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';
import { IoIosMore } from 'react-icons/io';

const styles = {
  container: {
    border: '1px solid #000000',
    borderRadius: 4,
    height: 160,
    margin: '2%',
    width: '25%',
  },
};

const NoteComponent = ({ classes, title }) => (
  <div className={classes.container}>
    <span>{title}</span>
    <IoIosMore />
  </div>
);

NoteComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(NoteComponent);
