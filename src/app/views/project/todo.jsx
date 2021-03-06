import NapprTodoList from '@nappr/nappr-todolist';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { MdList } from 'react-icons/md';
import { createUseStyles } from 'react-jss';
import uuidv1 from 'uuid/v1';

const useStyles = createUseStyles({
  header: {},
  list: {
    margin: '1%',
    maxWidth: 230,
    minWidth: 230,
    width: 230,
  },
  wrapper: {},
});

const TodoComponent = ({ item, onChange }) => {
  const classes = useStyles();
  const [tasks, updateTasks] = useState([
    {
      checked: false,
      id: uuidv1(),
      label: 'New task',
    },
  ]);
  return (
    <div className={classes.list}>
      <div className={classes.header}>
        <div>
          <MdList />
          <span>{item.title}</span>
        </div>
      </div>
      <div className={classes.wrapper}>
        <div style={{ height: 200 }}>
          <NapprTodoList
            tasks={tasks}
            onChange={onChange}
            onCreate={() => {
              const newTask = {
                checked: false,
                id: uuidv1(),
                label: 'New task',
              };
              const next = [...tasks, newTask];
              updateTasks(next);
            }}
          />
        </div>
      </div>
    </div>
  );
};

TodoComponent.defaultProps = {};

TodoComponent.propTypes = {
  item: PropTypes.shape().isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TodoComponent;
