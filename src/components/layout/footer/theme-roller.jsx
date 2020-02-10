import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';

import { UIthemes } from '../../../theme';
import { getAvailableThemes } from './utils';

const BUTTON_SIZE = 12;
const square = {
  height: BUTTON_SIZE,
  maxHeight: BUTTON_SIZE,
  maxWidth: BUTTON_SIZE,
  minHeight: BUTTON_SIZE,
  minWidth: BUTTON_SIZE,
  width: BUTTON_SIZE,
};

const styles = theme => {
  const themes = getAvailableThemes(theme, square);
  return {
    container: ({ theme: name }) => ({
      border: `1px solid ${theme.colors[name].border}`,
    }),
    ...themes,
  };
};

const AppFooterThemeRollerComponent = ({ changeTheme, classes }) => {
  return (
    <div className={classes.container}>
      {Object.keys(UIthemes).map(key => (
        <button
          className={classes[key]}
          type="button"
          onClick={changeTheme(key)}>
          &nbsp;
        </button>
      ))}
    </div>
  );
};

AppFooterThemeRollerComponent.defaultProps = {};

AppFooterThemeRollerComponent.propTypes = {
  changeTheme: PropTypes.func.isRequired,
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(AppFooterThemeRollerComponent);
