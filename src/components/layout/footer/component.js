import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  container: ({ theme: name }) => ({
    backgroundColor: theme.colors[name].foreground,
    borderTop: `1px solid ${theme.colors[name].border}`,
    composes: ['flex-0'],
    height: 24,
    maxHeight: 24,
    minHeight: 24,
  }),
});

const AppFooterComponent = ({ classes }) => (
  <div className={classes.container}>&nbsp;</div>
);

AppFooterComponent.defaultProps = {};

AppFooterComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(AppFooterComponent);
