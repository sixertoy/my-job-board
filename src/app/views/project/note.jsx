import { withStyles } from '@iziges/napper-react';
import NapperTodoList from '@iziges/napper-todolist';
import PropTypes from 'prop-types';
import React from 'react';
import { MdAdd, MdNote } from 'react-icons/md';

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

const NoteComponent = ({ classes, item }) => (
  <div className={classes.note}>
    <div className={classes.header}>
      <div>
        <MdNote />
        <span>{item.title}</span>
      </div>
      <button type="button" onClick={() => {}}>
        <MdAdd />
      </button>
    </div>
    <div className={classes.wrapper}>
      <NapperTodoList tasks={item.tasks} onChange={() => {}} />
    </div>
  </div>
);

NoteComponent.defaultProps = {};

NoteComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  item: PropTypes.shape().isRequired,
};

export default withStyles(styles)(NoteComponent);
