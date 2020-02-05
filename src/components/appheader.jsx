import { withStyles } from '@iziges/napper-core-react';
// import './applicationheader.css';
import PropTypes from 'prop-types';
import React from 'react';
// import { connect } from 'react-redux';

// import { getNextUpdate } from '../selectors';
const styles = theme => ({
  container: {
    backgroundColor: theme.colors.dark,
    color: theme.colors.white,
    composes: ['p24'],
    height: 'auto',
  },
});

const AppHeaderComponent = ({ classes }) => (
  <div className={classes.container} id="screen-header">
    <h2>My Job Board</h2>
    <p>
      <b>Next Update</b>
      <span style={{ marginLeft: '5px' }}>
        {/* {!nextupdate ? '' : new Date(nextupdate).toLocaleString()} */}
      </span>
    </p>
  </div>
);

AppHeaderComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  // nextupdate: PropTypes.number.isRequired,
};

export default withStyles(styles)(AppHeaderComponent);
