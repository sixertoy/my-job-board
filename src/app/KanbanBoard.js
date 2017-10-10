import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

// application
import './kanbanboard.css';
import { CARD_STATUS } from './../constants';
import { loadProviderFeeds } from './actions';
import OverlayCard from './components/OverlayCard';
import ProgressBar from './components/ui/ProgressBar';
import DraggableCard from './components/DraggableCard';
import BoardColumn from './components/kanbanboard/BoardColumn';
import ApplicationHeader from './components/ApplicationHeader';

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
      loadfeeds,
      nextupdate } = this.props;
    const now = Date.now();
    const isoutdated = (nextupdate < now);
    if (!isoutdated) {
      // FIXME -> move to a debugger
      console.log(`> Next datas update: ${new Date(nextupdate).toLocaleString()}`);
    }
    if (!isoutdated) return;
    loadfeeds();
  }

  render () {
    const {
      isloading,
      feedsitems,
      lastupdate,
      selectedcard,
      draggingcardid } = this.props;
    return (
      <div className="screen flex-rows">
        <ProgressBar loading={isloading} />
        <ApplicationHeader />
        <OverlayCard item={selectedcard} />
        <div className="kanban-board flex-columns">
          {!draggingcardid ? false : <DraggableCard lastupdate={lastupdate} />}
          <BoardColumn showcount title="Feeds"
            type={CARD_STATUS.DEFAULT}
            items={feedsitems.filter(obj => obj.status === CARD_STATUS.DEFAULT)} />
          <BoardColumn title="Todo"
            type={CARD_STATUS.TODO}
            items={feedsitems.filter(obj => obj.status === CARD_STATUS.TODO)} />
          <BoardColumn title="In Progress"
            type={CARD_STATUS.IN_PROGRESS}
            items={feedsitems.filter(obj => obj.status === CARD_STATUS.IN_PROGRESS)} />
          <BoardColumn title="Done"
            type={CARD_STATUS.DONE}
            items={feedsitems.filter(obj => obj.status === CARD_STATUS.DONE)} />
        </div>
      </div>
    );
  }
}

KanbanBoardView.propTypes = {
  isready: PropTypes.bool.isRequired,
  isloading: PropTypes.bool.isRequired,
  loadfeeds: PropTypes.func.isRequired,
  feedsitems: PropTypes.array.isRequired,
  lastupdate: PropTypes.number.isRequired,
  selectedcard: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ]).isRequired,
  draggingcardid: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]).isRequired,
  nextupdate: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number
  ]).isRequired
};

const mapStateToProps = state => ({
  isready: state.isready,
  isloading: state.isloading,
  doneitems: state.doneitems,
  todositems: state.todositems,
  feedsitems: state.feedsitems,
  lastupdate: state.lastupdate,
  nextupdate: state.nextupdate,
  selectedcard: state.selectedcard,
  draggingcardid: state.draggingcardid,
  inprogressitems: state.inprogressitems
});

const mapDispatchToProps = dispatch => ({
  loadfeeds: () => dispatch(loadProviderFeeds())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  DragDropContext(HTML5Backend)(KanbanBoardView)
);
