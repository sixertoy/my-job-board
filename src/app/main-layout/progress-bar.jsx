import { withStyles } from '@iziges/napper-react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
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
});

const ProgressBar = ({ classes, loading }) => {
  const cssobj = classNames(classes.loader, { 'is-hidden': !loading });
  return (
    <div className={classes.container} id="progress-bar">
      <div className={cssobj} />
    </div>
  );
};

ProgressBar.propTypes = {
  classes: PropTypes.shape().isRequired,
  loading: PropTypes.bool.isRequired,
};

export default withStyles(styles)(ProgressBar);
