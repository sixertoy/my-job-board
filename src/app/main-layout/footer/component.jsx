import { withStyles } from '@iziges/napper-react';
import PropTypes from 'prop-types';
import React from 'react';

import ThemeRoller from './theme-roller';

const styles = theme => ({
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
});

const AppFooterComponent = ({ changeTheme, classes }) => (
  <div className={classes.container}>
    <div>
      <span>v0.1.0</span>
    </div>
    <ThemeRoller changeTheme={changeTheme} />
  </div>
);

AppFooterComponent.defaultProps = {};

AppFooterComponent.propTypes = {
  changeTheme: PropTypes.func.isRequired,
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(AppFooterComponent);
