import React from 'react';

import './applicationheader.css';
import applogo from './../../assets/logo.svg';

const Header = () => (
  <div className="screen-header">
    <img src={applogo} className="screen-logo" alt="logo" />
    <h2>React/Electron</h2>
  </div>
);

export default Header;
