import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';

// application
import './kanbanscreen.css';
import logo from './../assets/logo.svg';
import { loadNewJobs } from './actions';
import KanbanColumn from './components/KanbanColumn';

class KanbanScreenView extends Component {

  componentDidMount () {
    if (this.props.isloaded) return;
    this.props.loadfeeds();
  }

  render () {
    const { feedsitems } = this.props;
    return (
      <div id="kanbanscreen" className="screen flex-rows">
        <div className="screen-header">
          <img src={logo} className="screen-logo" alt="logo" />
          <h2>React/Electron</h2>
        </div>
        <div className="kanban-board flex-columns">
          <KanbanColumn key="feeds"
            title="Feeds" items={feedsitems} />
          <KanbanColumn key="todo"
            title="Todo" items={[]} />
          <KanbanColumn key="in-progress"
            title="In Progress" items={[]} />
          <KanbanColumn key="done"
            title="Done" items={[]} />
        </div>
      </div>
    );
  }
}

KanbanScreenView.propTypes = {
  isloaded: PropTypes.bool.isRequired,
  loadfeeds: PropTypes.func.isRequired,
  feedsitems: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  isloaded: state.isloaded,
  feedsitems: state.feedsitems
});

const mapDispatchToProps = dispatch => ({
  loadfeeds: () => dispatch(loadNewJobs())
});

const KanbanScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanScreenView);

export default KanbanScreen;
