import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';

import ThemeRoller from './theme-roller';

const styles = theme => ({
  container: {
    backgroundColor: theme.colors.foreground,
    borderTop: `1px solid ${theme.colors.border}`,
    composes: ['flex-columns', 'no-no-flex-grow', 'flex-end', 'p12'],
  },
});

const AppFooterComponent = ({ changeTheme, classes }) => (
  <div className={classes.container}>
    <ThemeRoller changeTheme={changeTheme} />
  </div>
);

AppFooterComponent.defaultProps = {};

AppFooterComponent.propTypes = {
  changeTheme: PropTypes.func.isRequired,
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(AppFooterComponent);
