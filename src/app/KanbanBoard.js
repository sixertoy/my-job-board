import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

// application
import './kanbanboard.css';
import logo from './../assets/logo.svg';
import { loadNewJobs } from './actions';
import { UPDATE_INTERVAL_MS } from './../constants';
import KanbanColumn from './components/KanbanColumn';

class KanbanBoardView extends Component {

  constructor (props) {
    super(props);
    this.state = { isready: false };
  }

  componentDidMount () {
    this._updateApplicationFeeds();
  }

  componentWillReceiveProps (nextprops) {
    const { isready } = this.state;
    if (!isready && nextprops.isready) {
      this.setState({ isready: true },
        () => this._updateApplicationFeeds());
    }
  }

  _updateApplicationFeeds () {
    const { isready } = this.state;
    const {
      isloaded,
      loadfeeds,
      lastupdate } = this.props;
    const now = Date.now();
    const isoutdated = ((lastupdate + UPDATE_INTERVAL_MS) < now);
    if (!isready || !isoutdated || isloaded) return;
    console.log('isoutdated', isoutdated);
    loadfeeds();
  }

  render () {
    const { feedsitems } = this.props;
    return (
      <div className="screen flex-rows">
        <div className="screen-header">
          <img src={logo} className="screen-logo" alt="logo" />
          <h2>React/Electron</h2>
        </div>
        <div className="kanbanboard flex-columns">
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

KanbanBoardView.propTypes = {
  isready: PropTypes.bool.isRequired,
  isloaded: PropTypes.bool.isRequired,
  loadfeeds: PropTypes.func.isRequired,
  feedsitems: PropTypes.array.isRequired,
  lastupdate: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number
  ]).isRequired
};

const mapStateToProps = state => ({
  isready: state.isready,
  isloaded: state.isloaded,
  lastupdate: state.lastupdate,
  feedsitems: state.feedsitems
});

const mapDispatchToProps = dispatch => ({
  loadfeeds: () => dispatch(loadNewJobs())
});

const KanbanBoardContext = DragDropContext(HTML5Backend)(KanbanBoardView);
const KanbanBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanBoardContext);

export default KanbanBoard;
