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
import {
  getJobOffers,
  getNextUpdate } from './selectors';

// check si la date actuelle est superieure a la prochaine mise a jour prevue
const dataHasExpired = (nextupdate) => {
  const now = Date.now();
  return (now > nextupdate);
};

/**
 *
 * [state description]
 *
 */
class KanbanBoardView extends Component {

  constructor (props) {
    super(props);
    // isready est change
    // quand l'app a fini de charge les donnees persistantes du browser
    this.state = { isready: false };
  }

  componentWillReceiveProps (nextprops) {
    const { isready } = this.state;
    if (!isready && nextprops.isready) {
      // si les données persistantes ont ete chargees
      this.setState({ isready: true },
        () => this._updateApplicationFeeds());
    }
  }

  _updateApplicationFeeds () {
    const {
      loadfeeds,
      nextupdate } = this.props;
    const date = getNextUpdate(nextupdate);
    // FIXME
    // -> move to a debugger
    console.log(`> Next datas update: ${new Date(date).toLocaleString()}`);
    if (!dataHasExpired(date)) return;
    loadfeeds();
  }

  render () {
    const {
      isloading,
      joboffers,
      openedcard,
      draggingcard } = this.props;
    return (
      <div className="screen flex-rows">
        <ProgressBar loading={isloading} />
        <ApplicationHeader />
        {openedcard && <OverlayCard />}
        <div className="kanban-board flex-columns">
          {draggingcard && <DraggableCard />}
          <BoardColumn showcount title="Feeds"
            type={CARD_STATUS.DEFAULT}
            items={joboffers.filter(obj => obj.status === CARD_STATUS.DEFAULT)} />
          <BoardColumn title="Todo"
            type={CARD_STATUS.TODO}
            items={joboffers.filter(obj => obj.status === CARD_STATUS.TODO)} />
          <BoardColumn title="In Progress"
            type={CARD_STATUS.IN_PROGRESS}
            items={joboffers.filter(obj => obj.status === CARD_STATUS.IN_PROGRESS)} />
          <BoardColumn title="Done"
            type={CARD_STATUS.DONE}
            items={joboffers.filter(obj => obj.status === CARD_STATUS.DONE)} />
        </div>
      </div>
    );
  }
}

KanbanBoardView.propTypes = {
  isready: PropTypes.bool.isRequired,
  isloading: PropTypes.bool.isRequired,
  loadfeeds: PropTypes.func.isRequired,
  joboffers: PropTypes.array.isRequired,
  nextupdate: PropTypes.number.isRequired,
  openedcard: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ]).isRequired,
  draggingcard: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]).isRequired
};

const mapStateToProps = state => ({
  isready: state.isready,
  isloading: state.isloading,
  openedcard: state.openedcard,
  joboffers: getJobOffers(state),
  nextupdate: getNextUpdate(state),
  draggingcard: state.draggingcard
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
