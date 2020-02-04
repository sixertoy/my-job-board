// application
import './kanbanboard.css';

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { connect } from 'react-redux';

import { CARD_STATUS } from '../constants';
import { filterFeeds, loadProviderFeeds } from './actions';
import ApplicationHeader from './components/ApplicationHeader';
import DraggableCard from './components/DraggableCard';
import BoardColumn from './components/kanbanboard/BoardColumn';
import OverlayCard from './components/OverlayCard';
import ProgressBar from './components/ProgressBar';
import {
  getDoneItems,
  getFeedsItems,
  getInProgressItems,
  getNextUpdate,
  getTodoItems,
} from './selectors';

// check si la date actuelle est superieure a la prochaine mise a jour prevue
const dataHasExpired = nextupdate => {
  const now = Date.now();
  return now > nextupdate;
};

const filteroffers = (offers, inputvalue) => {
  const strvalue = inputvalue.trim();
  if (!strvalue || strvalue === '') return offers;
  const terms = strvalue.split(' ').map(term => term.toLowerCase());
  return offers
    .filter(
      item =>
        terms.filter(term => item.title.toLowerCase().indexOf(term) !== -1)
          .length
    )
    .filter(
      item =>
        terms.filter(
          term => item.description.toLowerCase().indexOf(term) !== -1
        ).length
    );
};

/**
 *
 * [state description]
 *
 */
class KanbanBoardView extends Component {
  constructor(props) {
    super(props);
    // isready change quand charge les donnees persistantes
    this.state = { isready: false };
  }

  componentWillReceiveProps(nextprops) {
    const { isready } = this.state;
    if (!isready && nextprops.isready) {
      this.setState(
        { isready: true },
        // si les données persistantes du browser localstorage ont ete chargees
        () => {
          this._updateApplicationFeeds();
        }
      );
    }
  }

  _updateApplicationFeeds() {
    const { loadfeeds, nextupdate } = this.props;
    const hasexpired = dataHasExpired(nextupdate);
    // FIXME -> move console.log to a debugger
    // eslint-disable-next-line no-console
    console.log(
      `> Next datas update: ${new Date(nextupdate).toLocaleString()}`
    );
    if (!hasexpired) return;
    loadfeeds();
  }

  render() {
    const {
      doneoffers,
      draggingcard,
      feedsoffers,
      inprogressoffers,
      isloading,
      openedcard,
      search,
      searchchange,
      todooffers,
    } = this.props;
    return (
      <div className="screen flex-rows">
        <ProgressBar loading={isloading} />
        <ApplicationHeader />
        {openedcard && <OverlayCard />}
        <div className="kanban-board flex-columns">
          {draggingcard && <DraggableCard />}
          <BoardColumn
            showcount
            canfilter={searchchange}
            items={filteroffers(feedsoffers, search)}
            search={search}
            title="Feeds"
            type={CARD_STATUS.DEFAULT}
          />
          <BoardColumn
            items={todooffers}
            title="Todo"
            type={CARD_STATUS.TODO}
          />
          <BoardColumn
            items={inprogressoffers}
            title="In Progress"
            type={CARD_STATUS.IN_PROGRESS}
          />
          <BoardColumn
            items={doneoffers}
            title="Done"
            type={CARD_STATUS.DONE}
          />
        </div>
      </div>
    );
  }
}

KanbanBoardView.propTypes = {
  doneoffers: PropTypes.array.isRequired,
  draggingcard: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
    .isRequired,
  feedsoffers: PropTypes.array.isRequired,
  inprogressoffers: PropTypes.array.isRequired,
  isloading: PropTypes.bool.isRequired,
  isready: PropTypes.bool.isRequired,
  loadfeeds: PropTypes.func.isRequired,
  nextupdate: PropTypes.number.isRequired,
  openedcard: PropTypes.oneOfType([PropTypes.bool, PropTypes.object])
    .isRequired,
  search: PropTypes.string.isRequired,
  searchchange: PropTypes.func.isRequired,
  todooffers: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  doneoffers: getDoneItems(state),
  draggingcard: state.draggingcard,
  feedsoffers: getFeedsItems(state),
  inprogressoffers: getInProgressItems(state),
  isloading: state.isloading,
  isready: state.isready,
  // offers
  nextupdate: getNextUpdate(state),
  openedcard: state.openedcard,
  search: state.search,
  todooffers: getTodoItems(state),
});

const mapDispatchToProps = dispatch => ({
  loadfeeds: () => dispatch(loadProviderFeeds()),
  searchchange: inputvalue => dispatch(filterFeeds(inputvalue)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DragDropContext(HTML5Backend)(KanbanBoardView));
