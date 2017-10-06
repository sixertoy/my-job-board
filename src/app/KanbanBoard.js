import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

// application
import './kanbanboard.css';
import logo from './../assets/logo.svg';
import { loadJobsFeeds } from './actions';
import DraggableCard from './components/DraggableCard';
import BoardColumn from './components/kanbanboard/Column';

class KanbanBoardView extends Component {

  constructor (props) {
    super(props);
    this.state = { isready: false };
  }

  componentDidMount () {
    const { isready } = this.state;
    if (!isready) return;
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
    const {
      isloaded,
      loadfeeds,
      nextupdate } = this.props;
    const now = Date.now();
    const isoutdated = (nextupdate < now);
    if (!isoutdated) {
      // FIXME -> move to a debugger
      console.log(`> Next datas update: ${new Date(nextupdate).toLocaleString()}`);
    }
    if (!isoutdated || isloaded) return;
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
        <div className="kanban-board flex-columns">
          <DraggableCard />
          <BoardColumn key="feeds"
            title="Feeds" items={feedsitems} />
          <BoardColumn key="todo"
            title="Todo" items={[]} />
          <BoardColumn key="in-progress"
            title="In Progress" items={[]} />
          <BoardColumn key="done"
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
  nextupdate: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number
  ]).isRequired
};

const mapStateToProps = state => ({
  isready: state.isready,
  isloaded: state.isloaded,
  feedsitems: state.feedsitems,
  nextupdate: state.nextupdate
});

const mapDispatchToProps = dispatch => ({
  loadfeeds: () => dispatch(loadJobsFeeds())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  DragDropContext(HTML5Backend)(KanbanBoardView)
);
