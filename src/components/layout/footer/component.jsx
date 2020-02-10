import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';

import ThemeRoller from './theme-roller';

const styles = theme => ({
  container: ({ theme: name }) => ({
    backgroundColor: theme.colors[name].foreground,
    borderTop: `1px solid ${theme.colors[name].border}`,
    composes: ['flex-columns', 'no-no-flex-grow', 'flex-end', 'p12'],
  }),
});

const AppFooterComponent = ({ changeTheme, classes, theme }) => (
  <div className={classes.container}>
    <ThemeRoller changeTheme={changeTheme} theme={theme} />
  </div>
);

AppFooterComponent.defaultProps = {};

AppFooterComponent.propTypes = {
  changeTheme: PropTypes.func.isRequired,
  classes: PropTypes.shape().isRequired,
  theme: PropTypes.string.isRequired,
};

export default withStyles(styles)(AppFooterComponent);
