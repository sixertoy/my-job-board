import React from 'react';
import { createUseStyles } from 'react-jss';

import { TasksType } from './core/prop-types';

const useStyles = createUseStyles({
  counter: {
    display: 'flex',
    flex: '0 1',
    marginLeft: 12,
  },
});

const NapperTodoListCounterComponent = React.memo(({ tasks }) => {
  const classes = useStyles();
  const total = (tasks && tasks.length) || 0;
  const completed = (tasks && tasks.filter(obj => obj.checked).length) || 0;
  return (
    <div className={classes.counter}>
      <span>{completed}</span>
      <span>/</span>
      <span>{total}</span>
    </div>
  );
});

NapperTodoListCounterComponent.propTypes = {
  tasks: TasksType.isRequired,
};

export default NapperTodoListCounterComponent;
