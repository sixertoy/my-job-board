import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';

import { EVENT_TYPES } from '../../constants';
import { getThemes } from '../../theme';

const useStyles = createUseStyles(theme => ({
  container: {
    border: `1px solid ${theme.colors.border}`,
  },
}));

const Button = React.memo(({ backgroundColor, changeTheme, disabled }) => (
  <button
    style={{
      backgroundColor,
      cursor: disabled ? 'default' : 'pointer',
      height: 12,
      maxHeight: 12,
      maxWidth: 12,
      minHeight: 12,
      minWidth: 12,
      opacity: Number(!disabled),
      width: 12,
    }}
    type="button"
    onClick={changeTheme}>
    &nbsp;
  </button>
));

Button.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  changeTheme: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

const ThemeRollerComponent = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const classes = useStyles({ theme });
  const selected = useSelector(state => state.selectedTheme);
  const changeTheme = useCallback(
    id => () => dispatch({ id, type: EVENT_TYPES.THEME_CHANGE }),
    [dispatch]
  );
  const themes = Object.entries(getThemes());
  return (
    <div className={classes.container}>
      {themes.map(([id, { background }]) => {
        const isActive = selected === id;
        return (
          <Button
            key={id}
            backgroundColor={background}
            changeTheme={changeTheme(id)}
            disabled={isActive}
          />
        );
      })}
    </div>
  );
};

export default ThemeRollerComponent;
