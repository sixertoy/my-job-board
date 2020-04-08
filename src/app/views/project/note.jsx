import { withStyles } from '@iziges/napper-react';
import PropTypes from 'prop-types';
import React from 'react';
import { MdNote } from 'react-icons/md';

const styles = {
  header: {
    composes: ['flex-columns', 'flex-between'],
  },
  note: {
    margin: '1%',
    maxWidth: 230,
    minWidth: 230,
    width: 230,
  },
  wrapper: {},
};

const NoteComponent = ({ classes, item, onChange }) => (
  <div className={classes.note}>
    <div className={classes.header}>
      <div>
        <MdNote />
        <span>{item.title}</span>
      </div>
    </div>
  </div>
);

NoteComponent.defaultProps = {};

NoteComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  item: PropTypes.shape().isRequired,
  onChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(NoteComponent);
