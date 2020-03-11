import { withStyles } from '@iziges/napper-react';
import PropTypes from 'prop-types';
import React from 'react';

const styles = () => ({
  container: {},
});

const DumbComponent = ({ classes }) => <div className={classes.container} />;

DumbComponent.defaultProps = {};

DumbComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(DumbComponent);
