import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch } from 'react-redux';

import { EVENT_TYPES } from '../../constants';
import { getThemes } from '../../theme';

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

const useStyles = createUseStyles(theme => {
  return {
    container: {
      border: `1px solid ${theme.colors.border}`,
    },
    ...themeButton,
  };
});

const ThemeButton = React.memo(({ changeTheme, className, id }) => (
  <button className={className} type="button" onClick={() => changeTheme(id)}>
    &nbsp;
  </button>
));

ThemeButton.propTypes = {
  changeTheme: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

const AppFooterThemeRollerComponent = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const classes = useStyles({ theme });
  const changeTheme = useCallback(
    id => dispatch({ id, type: EVENT_TYPES.THEME_CHANGE }),
    [dispatch]
  );
  return (
    <div className={classes.container}>
      {Object.keys(themeButton).map(id => (
        <ThemeButton
          key={id}
          changeTheme={changeTheme}
          className={classes[id]}
          id={id}
        />
      ))}
    </div>
  );
};

export default AppFooterThemeRollerComponent;
