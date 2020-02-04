import { withStyles } from '@iziges/napper-core-react';
import React from 'react';
// import './applicationheader.css';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

// import { getNextUpdate } from '../selectors';
const styles = {};

const AppHeaderComponent = () => (
  <div id="screen-header">
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
  // nextupdate: PropTypes.number.isRequired,
};

export default withStyles(styles)(AppHeaderComponent);
