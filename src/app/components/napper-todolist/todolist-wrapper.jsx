import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

import { TasksType } from './core/prop-types';
import NapperTodoListTaskComponent from './todolist-task';

const useStyles = createUseStyles({
  tasks: {
    display: 'flex',
    flex: 1,
    position: 'relative',
  },
  wrapper: {
    bottom: 0,
    composes: ['napper-fancy-scollbar'],
    left: 0,
    overflowX: 'hidden',
    overflowY: 'auto',
    position: 'absolute',
    right: 0,
    top: 0,
  },
});

function renderTaskItem(obj, onChange, onDelete) {
  return (
    <NapperTodoListTaskComponent
      key={obj.id}
      checked={obj.checked}
      id={obj.id}
      label={obj.label}
      onChange={onChange}
      onDelete={onDelete}
    />
  );
}

const NapperTodoListWrapperComponent = ({
  onChange,
  onDelete,
  render,
  tasks,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.tasks}>
      <div className={classes.wrapper}>
        {tasks.map(obj => render(obj, onChange, onDelete))}
      </div>
    </div>
  );
};

NapperTodoListWrapperComponent.defaultProps = {
  render: renderTaskItem,
};

NapperTodoListWrapperComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]).isRequired,
  render: PropTypes.func,
  tasks: TasksType.isRequired,
};

export default NapperTodoListWrapperComponent;
