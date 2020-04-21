import classNames from 'classnames';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';

const useStyles = createUseStyles(theme => ({
  container: {
    backgroundColor: theme.colors.dark,
    composes: ['is-relative'],
    height: 4,
  },
  loader: {
    '&, &::before': {
      backgroundColor: theme.colors.blue,
      height: 4,
    },
    '&::before': {
      backgroundColor: theme.colors.gray,
      composes: ['is-block', 'is-absolute'],
      content: '""',
      left: -200,
      width: 200,
      // animation: 'loading 2s linear infinite',
    },
    composes: ['is-absolute', 'no-overflow', 'mb7', 'is-full-width'],
  },
}));

const ProgressBar = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const loading = useSelector(state => state.loading);
  const loaderClassnames = classNames(classes.loader, {
    'is-hidden': !loading,
  });
  return (
    <div className={classes.container} id="progress-bar">
      <div className={loaderClassnames} />
    </div>
  );
};

export default ProgressBar;
