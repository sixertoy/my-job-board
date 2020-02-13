import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

import { compose, noop } from './core/fp';
import { PlacementType, TasksType, TitleType } from './core/prop-types';
import {
  checkAllAreCompleted,
  filterCompletedTasks,
  moveCompletedToBottom,
  orderTasksBy,
  showBottomCounter,
  showBottomProgress,
  showTopCounter,
  showTopProgress,
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
    completedAtBottom,
    counterPosition,
    onChange,
    onDelete,
    onToggle,
    order,
    orderBy,
    showCompleted,
    showCounter,
    showProgress,
    tasks,
    title,
  }) => {
    const classes = useStyles();
    const filtered = compose(
      (!showCompleted && filterCompletedTasks) || noop,
      (completedAtBottom && moveCompletedToBottom) || noop,
      (order && orderTasksBy(orderBy, order)) || noop
    )(tasks);
    const allChecked = checkAllAreCompleted(tasks);
    const counterOnTop = showTopCounter(counterPosition, showCounter);
    const progressOnTop = showTopProgress(counterPosition, showProgress);
    const counterOnBottom = showBottomCounter(counterPosition, showCounter);
    const progressOnBottom = showBottomProgress(counterPosition, showProgress);
    return (
      <div className={classes.tasks}>
        <div className={classes.container}>
          <NapperTodoListHeaderComponent
            showCounter={counterOnTop}
            showProgress={progressOnTop}
            tasks={tasks}
            title={title}
          />
          {onToggle && (
            <NapperTodoListCheckerComponent
              allChecked={allChecked}
              onChange={onToggle}
            />
          )}
          <NapperTodoListWrapperComponent
            tasks={filtered}
            onChange={onChange}
            onDelete={onDelete}
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
  completedAtBottom: true,
  counterPosition: 'bottom',
  onDelete: false,
  onToggle: false,
  order: false,
  orderBy: 'label',
  showCompleted: false,
  showCounter: false,
  showProgress: false,
  tasks: [],
  title: false,
};

NapperTodoListComponent.propTypes = {
  completedAtBottom: PropTypes.bool,
  counterPosition: PlacementType,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  onToggle: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  order: PropTypes.oneOf([false, 'desc', 'asc']),
  orderBy: PropTypes.oneOf(['label', 'id', 'mtime', 'ctime']),
  showCompleted: PropTypes.bool,
  showCounter: PropTypes.bool,
  showProgress: PropTypes.bool,
  tasks: TasksType,
  title: TitleType,
};

export default NapperTodoListComponent;
