import { withStyles } from '@iziges/napper-react';
import PropTypes from 'prop-types';
import React from 'react';

import { getThemes } from '../../../theme';

const square = {
  height: 12,
  maxHeight: 12,
  maxWidth: 12,
  minHeight: 12,
  minWidth: 12,
  width: 12,
};

const themes = getThemes();
const themeButton = Object.keys(themes).reduce((acc, key) => {
  const { background: backgroundColor } = themes[key];
  return { ...acc, [key]: { backgroundColor, ...square } };
}, {});

const styles = theme => {
  return {
    container: {
      border: `1px solid ${theme.colors.border}`,
    },
    ...themeButton,
  };
};

const AppFooterThemeRollerComponent = ({ changeTheme, classes }) => {
  return (
    <div className={classes.container}>
      {Object.keys(themeButton).map(key => (
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
