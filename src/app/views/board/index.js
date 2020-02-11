import orderBy from 'lodash.orderby';
import { connect } from 'react-redux';

import { CARD_STATUS, UPDATE_INTERVAL_MS } from '../../../constants';
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
  forceRefresh: () => dispatch(loadFeeds()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanBoardComponent);
