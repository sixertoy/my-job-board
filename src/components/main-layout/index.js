import { connect } from 'react-redux';

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
  return {
    loadFeeds: () => {
      const shouldUpdate = shouldUpdateFeeds(lastFeedUpdate);
      if (!shouldUpdate) return;
      loadFeedsHandler(lastFeedUpdate);
    },
    loading,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(MainLayoutComponent);
