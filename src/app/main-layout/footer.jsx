import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import ThemeRoller from './theme-roller';

const useStyles = createUseStyles(theme => ({
  container: {
    backgroundColor: theme.colors.foreground,
    borderTop: `1px solid ${theme.colors.border}`,
    composes: [
      'items-center',
      'flex-columns',
      'flex-between',
      'no-no-flex-grow',
      'flex-end',
      'p12',
    ],
  },
}));

const AppFooterComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      <div>
        <span>v0.1.0</span>
      </div>
      <ThemeRoller />
    </div>
  );
};

export default AppFooterComponent;
