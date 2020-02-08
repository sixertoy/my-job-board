import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  container: {
    backgroundColor: theme.colors.dark,
    color: theme.colors.white,
    composes: ['p24'],
    height: 'auto',
  },
});

const AppHeaderComponent = React.memo(({ classes }) => {
  return (
    <div className={classes.container} id="app-header">
      <h2>My Job Board</h2>
    </div>
  );
});

AppHeaderComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(AppHeaderComponent);
