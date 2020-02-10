import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';

const BUTTON_SIZE = 12;
const square = {
  height: BUTTON_SIZE,
  maxHeight: BUTTON_SIZE,
  maxWidth: BUTTON_SIZE,
  minHeight: BUTTON_SIZE,
  minWidth: BUTTON_SIZE,
  width: BUTTON_SIZE,
};

const styles = theme => ({
  container: ({ theme: name }) => ({
    border: `1px solid ${theme.colors[name].border}`,
  }),
  themeDay: {
    backgroundColor: theme.colors.day.background,
    ...square,
  },
  themeNight: {
    backgroundColor: theme.colors.night.background,
    ...square,
  },
});

const AppFooterThemeRollerComponent = ({ changeTheme, classes }) => (
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

AppFooterThemeRollerComponent.defaultProps = {};

AppFooterThemeRollerComponent.propTypes = {
  changeTheme: PropTypes.func.isRequired,
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(AppFooterThemeRollerComponent);
