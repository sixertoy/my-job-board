import PropTypes from 'prop-types';
import React from 'react';
import { MdNote } from 'react-icons/md';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
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
});

const NoteComponent = ({ item, onChange }) => {
  const classes = useStyles();
  return (
    <div className={classes.note}>
      <div className={classes.header}>
        <div>
          <MdNote />
          <span>{item.title}</span>
        </div>
      </div>
    </div>
  );
};

NoteComponent.defaultProps = {};

NoteComponent.propTypes = {
  item: PropTypes.shape().isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NoteComponent;
