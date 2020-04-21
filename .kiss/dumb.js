import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles(theme => ({
  container: {},
}));

const DumbComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return <div className={classes.container} />;
};

DumbComponent.defaultProps = {};

DumbComponent.propTypes = {};

export default DumbComponent;
