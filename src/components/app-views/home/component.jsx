import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';

const styles = () => ({
  container: {},
});

const ViewHomeComponent = ({ classes }) => (
  <div className={classes.container}>Welcome</div>
);

ViewHomeComponent.defaultProps = {};

ViewHomeComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(ViewHomeComponent);
