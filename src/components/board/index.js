import { connect } from 'react-redux';

import { UPDATE_INTERVAL_MS } from '../../constants';
import { loadFeeds } from '../../redux/actions';
import KanbanBoardComponent from './kanban-board-component';

const mapStateToProps = state => {
  const { lastFeedUpdate } = state;
  const nextUpdate = lastFeedUpdate + UPDATE_INTERVAL_MS;
  return { nextUpdate };
};

const mapDispatchToProps = dispatch => ({
  forceRefresh: () => dispatch(loadFeeds()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanBoardComponent);
