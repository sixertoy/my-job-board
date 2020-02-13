import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

import { PlacementType, TasksType } from './core/prop-types';
import { getOnChangeHandler } from './core/utils';
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
    height: 200,
    maxHeight: 200,
    maxWidth: 200,
    width: 200,
  },
});

const NapperTodoListComponent = React.memo(
  ({
    counterPosition,
    onChange,
    showCompleted,
    showCounter,
    showProgress,
    tasks,
    title,
  }) => {
    const classes = useStyles();
    return (
      <div className={classes.tasks}>
        <div className={classes.container}>
          <NapperTodoListHeaderComponent
            showCompleted={showCompleted}
            showCounter={
              (counterPosition === 'top' || counterPosition === 'both') &&
              showCounter
            }
            showProgress={
              (counterPosition === 'top' || counterPosition === 'both') &&
              showProgress
            }
            tasks={tasks}
            title={title}
          />
          <NapperTodoListWrapperComponent
            tasks={tasks}
            onClick={(id, checked) => {
              const handler = getOnChangeHandler(tasks);
              const { updatedTask, updatedTasksList } = handler(id, checked);
              onChange(updatedTasksList, updatedTask);
            }}
          />
          <NapperTodoListFooterComponent
            showCounter={
              (counterPosition === 'bottom' || counterPosition === 'both') &&
              showCounter
            }
            showProgress={
              (counterPosition === 'bottom' || counterPosition === 'both') &&
              showProgress
            }
            tasks={tasks}
          />
        </div>
      </div>
    );
  }
);

NapperTodoListComponent.defaultProps = {
  counterPosition: 'bottom',
  showCompleted: false,
  showCounter: false,
  showProgress: false,
  tasks: [],
  title: '',
};

NapperTodoListComponent.propTypes = {
  counterPosition: PlacementType,
  onChange: PropTypes.func.isRequired,
  showCompleted: PropTypes.bool,
  showCounter: PropTypes.bool,
  showProgress: PropTypes.bool,
  tasks: TasksType,
  title: PropTypes.string,
};

export default NapperTodoListComponent;
