import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

// application
import './kanbanboard.css';
import { CARD_STATUS } from './../constants';
import OverlayCard from './components/OverlayCard';
import ProgressBar from './components/ProgressBar';
import DraggableCard from './components/DraggableCard';
import BoardColumn from './components/kanbanboard/BoardColumn';
import ApplicationHeader from './components/ApplicationHeader';
import {
  filterFeeds,
  loadProviderFeeds } from './actions';
import {
  getDoneItems,
  getTodoItems,
  getNextUpdate,
  getFeedsItems,
  getInProgressItems } from './selectors';

// check si la date actuelle est superieure a la prochaine mise a jour prevue
const dataHasExpired = (nextupdate) => {
  const now = Date.now();
  return (now > nextupdate);
};

const filteroffers = (offers, inputvalue) => {
  const strvalue = inputvalue.trim();
  if (!strvalue || (strvalue === '')) return offers;
  const terms = strvalue.split(' ')
    .map(term => term.toLowerCase());
  return offers
    .filter(item => terms.filter(term =>
      item.title.toLowerCase().indexOf(term) !== -1).length)
    .filter(item => terms.filter(term =>
      item.description.toLowerCase().indexOf(term) !== -1).length);
};

/**
 *
 * [state description]
 *
 */
class KanbanBoardView extends Component {

  constructor (props) {
    super(props);
    // isready change quand charge les donnees persistantes
    this.state = { isready: false };
  }

  componentWillReceiveProps (nextprops) {
    const { isready } = this.state;
    if (!isready && nextprops.isready) {
      this.setState({ isready: true },
        // si les données persistantes du browser localstorage ont ete chargees
        () => {
          this._updateApplicationFeeds();
        });
    }
  }

  _updateApplicationFeeds () {
    const { loadfeeds, nextupdate } = this.props;
    const hasexpired = dataHasExpired(nextupdate);
    // FIXME -> move console.log to a debugger
    // eslint-disable-next-line no-console
    console.log(`> Next datas update: ${new Date(nextupdate).toLocaleString()}`);
    if (!hasexpired) return;
    loadfeeds();
  }

  render () {
    const {
      search,
      isloading,
      openedcard,
      todooffers,
      doneoffers,
      feedsoffers,
      draggingcard,
      searchchange,
      inprogressoffers } = this.props;
    return (
      <div className="screen flex-rows">
        <ProgressBar loading={isloading} />
        <ApplicationHeader />
        {openedcard && <OverlayCard />}
        <div className="kanban-board flex-columns">
          {draggingcard && <DraggableCard />}
          <BoardColumn showcount title="Feeds"
            type={CARD_STATUS.DEFAULT}
            search={search} canfilter={searchchange}
            items={filteroffers(feedsoffers, search)} />
          <BoardColumn title="Todo"
            type={CARD_STATUS.TODO}
            items={todooffers} />
          <BoardColumn title="In Progress"
            type={CARD_STATUS.IN_PROGRESS}
            items={inprogressoffers} />
          <BoardColumn title="Done"
            type={CARD_STATUS.DONE}
            items={doneoffers} />
        </div>
      </div>
    );
  }
}

KanbanBoardView.propTypes = {
  isready: PropTypes.bool.isRequired,
  search: PropTypes.string.isRequired,
  isloading: PropTypes.bool.isRequired,
  loadfeeds: PropTypes.func.isRequired,
  doneoffers: PropTypes.array.isRequired,
  todooffers: PropTypes.array.isRequired,
  searchchange: PropTypes.func.isRequired,
  feedsoffers: PropTypes.array.isRequired,
  inprogressoffers: PropTypes.array.isRequired,
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
  search: state.search,
  isready: state.isready,
  isloading: state.isloading,
  openedcard: state.openedcard,
  nextupdate: getNextUpdate(state),
  draggingcard: state.draggingcard,
  // offers
  doneoffers: getDoneItems(state),
  todooffers: getTodoItems(state),
  feedsoffers: getFeedsItems(state),
  inprogressoffers: getInProgressItems(state)
});

const mapDispatchToProps = dispatch => ({
  loadfeeds: () => dispatch(loadProviderFeeds()),
  searchchange: inputvalue => dispatch(filterFeeds(inputvalue))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  DragDropContext(HTML5Backend)(KanbanBoardView)
);
