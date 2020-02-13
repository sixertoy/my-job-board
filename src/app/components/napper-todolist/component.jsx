import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

import { PlacementType, TasksType } from './core/prop-types';
import {
  showBottomCounter,
  showBottomProgress,
  showTopCounter,
  showTopProgress,
  toggleAllTasks,
  updateAllTasks,
  updatedTask,
} from './core/utils';
import NapperTodoListCheckerComponent from './todolist-checker';
import NapperTodoListFooterComponent from './todolist-footer';
import NapperTodoListHeaderComponent from './todolist-header';
import NapperTodoListWrapperComponent from './todolist-wrapper';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'flex-start',
    maxHeight: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    minWidth: '100%',
    width: '100%',
  },
  tasks: {
    height: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    minWidth: '100%',
    width: '100%',
  },
});

const NapperTodoListComponent = React.memo(
  ({
    canCheckAll,
    counterPosition,
    onChange,
    showCompleted,
    showCounter,
    showProgress,
    tasks,
    title,
  }) => {
    const classes = useStyles();
    const counterOnTop = showTopCounter(counterPosition, showCounter);
    const progressOnTop = showTopProgress(counterPosition, showProgress);
    const counterOnBottom = showBottomCounter(counterPosition, showCounter);
    const progressOnBottom = showBottomProgress(counterPosition, showProgress);
    return (
      <div className={classes.tasks}>
        <div className={classes.container}>
          <NapperTodoListHeaderComponent
            showCompleted={showCompleted}
            showCounter={counterOnTop}
            showProgress={progressOnTop}
            tasks={tasks}
            title={title}
          />
          {canCheckAll && (
            <NapperTodoListCheckerComponent
              onChange={checked => {
                const all = toggleAllTasks(tasks, checked);
                onChange(null, all);
              }}
            />
          )}
          <NapperTodoListWrapperComponent
            tasks={tasks}
            onClick={(id, checked) => {
              const task = updatedTask(tasks, id, checked);
              const all = updateAllTasks(tasks, task);
              onChange(task, all);
            }}
          />
          <NapperTodoListFooterComponent
            showCounter={counterOnBottom}
            showProgress={progressOnBottom}
            tasks={tasks}
          />
        </div>
      </div>
    );
  }
);

NapperTodoListComponent.defaultProps = {
  canCheckAll: true,
  counterPosition: 'bottom',
  showCompleted: false,
  showCounter: false,
  showProgress: false,
  tasks: [],
  title: '',
};

NapperTodoListComponent.propTypes = {
  canCheckAll: PropTypes.bool,
  counterPosition: PlacementType,
  onChange: PropTypes.func.isRequired,
  showCompleted: PropTypes.bool,
  showCounter: PropTypes.bool,
  showProgress: PropTypes.bool,
  tasks: TasksType,
  title: PropTypes.string,
};

export default NapperTodoListComponent;
