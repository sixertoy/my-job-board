import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';

import { getAvailableThemes } from '../../theme';

const BUTTON_SIZE = 12;

const themes = getAvailableThemes({
  height: BUTTON_SIZE,
  maxHeight: BUTTON_SIZE,
  maxWidth: BUTTON_SIZE,
  minHeight: BUTTON_SIZE,
  minWidth: BUTTON_SIZE,
  width: BUTTON_SIZE,
});

const styles = theme => {
  return {
    container: {
      border: `1px solid ${theme.colors.border}`,
    },
    ...themes,
  };
};

const AppFooterThemeRollerComponent = ({ changeTheme, classes }) => {
  return (
    <div className={classes.container}>
      {Object.keys(themes).map(key => (
        <button
          key={key}
          className={classes[key]}
          type="button"
          onClick={() => changeTheme(key)}>
          &nbsp;
        </button>
      ))}
    </div>
  );
};

AppFooterThemeRollerComponent.propTypes = {
  changeTheme: PropTypes.func.isRequired,
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(AppFooterThemeRollerComponent);
