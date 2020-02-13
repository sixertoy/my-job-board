import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { TasksType } from './core/prop-types';

const useStyles = createUseStyles({
  bar: ({ theme }) => ({
    height: theme.progressSize,
    maxHeight: theme.progressSize,
    maxWidth: '100%',
    minHeight: theme.progressSize,
    minWidth: '100%',
    position: 'relative',
    width: '100%',
  }),
  progress: {
    display: 'flex',
    flex: 1,
  },
  thumb: ({ theme }) => ({
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    borderRadius: theme.progressRadius,
    bottom: 0,
    left: 0,
    position: 'absolute',
    top: 0,
    transition: 'width 0.5s',
    width: 0,
  }),
  track: {
    backgroundColor: 'hsla(0, 0%, 100%, 0.4)',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    transition: 'left 0.5s',
  },
});

const NapperTodoListProgressComponent = React.memo(({ tasks }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const total = (tasks && tasks.length) || 0;
  const completed = (tasks && tasks.filter(obj => obj.checked).length) || 0;
  const percent = (completed * 100) / total;
  const radius = percent > 0 ? '0 2px 2px 0' : 2;
  return (
    <div className={classes.progress}>
      <div className={classes.bar}>
        <div
          className={classes.track}
          style={{ borderRadius: radius, left: `${percent}%` }}
        />
        <div className={classes.thumb} style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
});

NapperTodoListProgressComponent.defaultProps = {};

NapperTodoListProgressComponent.propTypes = {
  tasks: TasksType.isRequired,
};

export default NapperTodoListProgressComponent;
