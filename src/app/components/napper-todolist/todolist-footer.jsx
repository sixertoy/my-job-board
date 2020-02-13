import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

import { TasksType } from './core/prop-types';
import NapperTodoListCounterComponent from './todolist-counter';
import NapperTodoListProgressComponent from './todolist-progress';

const useStyles = createUseStyles({
  footer: {
    display: 'flex',
    flex: '0 1',
    paddingTop: 12,
  },
  wrapper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

const NapperTodoListFooterComponent = React.memo(
  ({ showCounter, showProgress, tasks }) => {
    const classes = useStyles();
    return (
      <div className={classes.footer}>
        <div className={classes.wrapper}>
          {showProgress && <NapperTodoListProgressComponent tasks={tasks} />}
          {showCounter && <NapperTodoListCounterComponent tasks={tasks} />}
        </div>
      </div>
    );
  }
);

NapperTodoListFooterComponent.propTypes = {
  showCounter: PropTypes.bool.isRequired,
  showProgress: PropTypes.bool.isRequired,
  tasks: TasksType.isRequired,
};

export default NapperTodoListFooterComponent;
