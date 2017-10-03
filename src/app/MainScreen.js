import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';

// application
import './mainscreen.css';
import logo from './../assets/logo.svg';
import { loadNewJobs } from './actions';

class MainScreenView extends Component {

  componentDidMount () {
    if (this.props.isloaded) return;
    this.props.loadnewjobs();
  }

  _renderItemDescription ({ description }) {
    return { __html: description };
  }

  render () {
    const { feedsitems } = this.props;
    return (
      <div className="MainScreen">
        <div className="MainScreen-header">
          <img src={logo} className="MainScreen-logo" alt="logo" />
          <h2>React/Electron</h2>
        </div>
        <div>
          <ul>
            {feedsitems.map(obj => (
              <div>
                <h2>{obj.title}</h2>
                <div dangerouslySetInnerHTML={this._renderItemDescription(obj)} />
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

MainScreenView.propTypes = {
  isloaded: PropTypes.bool.isRequired,
  loadnewjobs: PropTypes.func.isRequired,
  feedsitems: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  isloaded: state.isloaded,
  feedsitems: state.feedsitems
});

const mapDispatchToProps = dispatch => ({
  loadnewjobs: () => dispatch(loadNewJobs())
});

const MainScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainScreenView);

export default MainScreen;
