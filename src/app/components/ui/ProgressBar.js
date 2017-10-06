import React from 'react';
import PropTypes from 'prop-types';

import './progressbar.css';

const ProgressBar = ({ loading }) => (
  <div id="preloader">
    <div className={(!loading ? '' : 'loader')} />
  </div>
);

ProgressBar.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default ProgressBar;
