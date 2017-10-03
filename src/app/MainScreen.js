import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import './mainscreen.css';
import logo from './../assets/logo.svg';

class MainScreenView extends Component {

  componentDidMount () {
    if (this.props.isloaded) return;
    // https://remixjobs.com/rss
    this.props.loadNewJobs();
  }

  render () {
    return (
      <div className="MainScreen">
        <div className="MainScreen-header">
          <img src={logo} className="MainScreen-logo" alt="logo" />
          <h2>React/Electron</h2>
        </div>
        <p className="MainScreen-intro">
          To get started, edit <code>src/MainScreen.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

MainScreenView.propTypes = {
  isloaded: PropTypes.bool.isRequired,
  loadNewJobs: PropTypes.func.isRequired
};

const mapStateToProps = () => ({});

const MainScreen = connect(
  mapStateToProps
)(MainScreenView);

export default MainScreen;
