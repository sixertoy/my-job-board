import moment from 'moment';
import { connect } from 'react-redux';

import { UPDATE_INTERVAL_MS } from '../../../constants';
import { loadFeeds } from '../../../redux/actions';
import KanbanBoardHeaderComponent from './component';

const mapStateToProps = state => {
  const { lastFeedUpdate } = state;
  let nextUpdate = (lastFeedUpdate || '') + UPDATE_INTERVAL_MS;
  nextUpdate = moment(nextUpdate).calendar();
  return { nextUpdate };
};

const mapDispatchToProps = dispatch => ({
  forceRefresh: () => dispatch(loadFeeds()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanBoardHeaderComponent);
