import { connect } from 'react-redux';

import { UPDATE_INTERVAL_MS } from '../../constants';
import { shouldUpdateFeeds } from '../../helpers';
import { loadFeeds } from '../../redux/actions';
import MainLayoutComponent from './main-layout-component';

const mapStateToProps = state => {
  const { lastFeedUpdate, loading } = state;
  return { lastFeedUpdate, loading };
};

const mapDispatchToProps = dispatch => ({
  loadFeedsHandler: () => dispatch(loadFeeds()),
});

const mergeProps = ({ lastFeedUpdate, loading }, { loadFeedsHandler }) => {
  const nextUpdateAt = lastFeedUpdate + UPDATE_INTERVAL_MS;
  return {
    loadFeeds: () => {
      const shouldUpdate = shouldUpdateFeeds(lastFeedUpdate);
      if (!shouldUpdate) return;
      loadFeedsHandler(lastFeedUpdate);
    },
    loading,
    nextUpdateAt,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(MainLayoutComponent);
