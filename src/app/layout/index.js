import { connect } from 'react-redux';

import { getBrowserRoutes, shouldUpdateFeeds } from '../../helpers';
import { loadFeeds } from '../../redux/actions';
import MainLayoutComponent from './component';

const mapStateToProps = state => {
  const { lastFeedUpdate, loading } = state;
  const routes = getBrowserRoutes();
  return { lastFeedUpdate, loading, routes };
};

const mapDispatchToProps = dispatch => ({
  loadFeedsHandler: () => dispatch(loadFeeds()),
});

const mergeProps = (
  { lastFeedUpdate, loading, routes },
  { loadFeedsHandler }
) => ({
  loadFeeds: () => {
    const shouldUpdate = shouldUpdateFeeds(lastFeedUpdate);
    if (!shouldUpdate) return;
    loadFeedsHandler(lastFeedUpdate);
  },
  loading,
  routes,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(MainLayoutComponent);
