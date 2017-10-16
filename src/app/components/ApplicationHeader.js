import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './applicationheader.css';
import { getNextUpdate } from './../selectors';

const Header = ({ nextupdate }) => (
  <div id="screen-header">
    <h2>My Job Board</h2>
    <p>
      <b>Next Update</b>
      <span style={{ marginLeft: '5px' }}>{!nextupdate ? ''
        : new Date(nextupdate).toLocaleString()}</span>
    </p>
  </div>
);

Header.propTypes = {
  nextupdate: PropTypes.number.isRequired
};

export default connect(
  state => ({
    nextupdate: getNextUpdate(state)
  })
)(Header);
