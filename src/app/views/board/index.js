import orderBy from 'lodash.orderby';
import { connect } from 'react-redux';

import {
  CARD_STATUS,
  EVENT_TYPES,
  UPDATE_INTERVAL_MS,
} from '../../../constants';
import { loadFeeds } from '../../../redux/actions';
import KanbanBoardComponent from './kanban-board-component';

const columns = orderBy(
  Object.entries(CARD_STATUS).map(arr => {
    return arr[1];
  }),
  ['priority'],
  'asc'
);

const mapStateToProps = state => {
  const { lastFeedUpdate, offers } = state;
  const nextUpdate = lastFeedUpdate + UPDATE_INTERVAL_MS;
  return { columns, nextUpdate, offers };
};

const mapDispatchToProps = dispatch => ({
  forceRefresh: () => {
    dispatch(loadFeeds());
  },
  moveCardToStatus: (id, status) => {
    dispatch({ id, status, type: EVENT_TYPES.MOVE_CARD_STATUS });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanBoardComponent);
