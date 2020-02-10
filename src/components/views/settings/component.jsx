import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  container: {},
  themeDay: {
    backgroundColor: theme.colors.day.background,
    border: `1px solid ${theme.colors.day.color}`,
    borderRadius: 9,
    composes: ['is-block', 'no-overflow'],
    height: 18,
    maxHeight: 18,
    maxWidth: 18,
    minHeight: 18,
    minWidth: 18,
    width: 18,
  },
  themeNight: {
    backgroundColor: theme.colors.night.background,
    border: `1px solid ${theme.colors.night.color}`,
    borderRadius: 9,
    composes: ['is-block', 'no-overflow'],
    height: 18,
    maxHeight: 18,
    maxWidth: 18,
    minHeight: 18,
    minWidth: 18,
    width: 18,
  },
});

const ReactDumbComponent = ({ changeTheme, classes }) => (
  <div className={classes.container}>
    <button
      className={classes.themeDay}
      type="button"
      onClick={changeTheme('day')}>
      &nbsp;
    </button>
    <button
      className={classes.themeNight}
      type="button"
      onClick={changeTheme('night')}>
      &nbsp;
    </button>
  </div>
);

ReactDumbComponent.propTypes = {
  changeTheme: PropTypes.func.isRequired,
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(ReactDumbComponent);
