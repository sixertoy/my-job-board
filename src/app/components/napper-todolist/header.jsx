import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

import { TasksType, TitleType } from './core/prop-types';
import NapperTodoListCounterComponent from './counter';
import NapperTodoListProgressComponent from './progress';

const useStyles = createUseStyles({
  bottom: {},
  header: {
    display: 'flex',
    flex: '0 1',
    flexDirection: 'column',
    paddingBottom: 12,
  },
  title: {},
  wrapper: {
    '& + div': {
      marginTop: 5,
    },
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const NapperTodoListHeaderComponent = React.memo(
  ({ showCounter, showProgress, tasks, title }) => {
    const classes = useStyles();
    return (
      <div className={classes.header}>
        <div className={classes.wrapper}>
          {title && <span className={classes.title}>{title}</span>}
          {showCounter && <NapperTodoListCounterComponent tasks={tasks} />}
        </div>
        {showProgress && (
          <div className={classes.bottom}>
            <NapperTodoListProgressComponent tasks={tasks} />
          </div>
        )}
      </div>
    );
  }
);

NapperTodoListHeaderComponent.propTypes = {
  showCounter: PropTypes.bool.isRequired,
  showProgress: PropTypes.bool.isRequired,
  tasks: TasksType.isRequired,
  title: TitleType.isRequired,
};

export default NapperTodoListHeaderComponent;
