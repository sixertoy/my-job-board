import { connect } from 'react-redux';

import { shouldUpdateFeeds } from '../../helpers';
import { loadFeeds } from '../../redux/actions';
import MainLayoutComponent from './component';

const mapStateToProps = state => {
  const { lastFeedUpdate, loading, theme } = state;
  return { lastFeedUpdate, loading, theme };
};

const mapDispatchToProps = dispatch => ({
  loadFeedsHandler: () => dispatch(loadFeeds()),
});

const mergeProps = (
  { lastFeedUpdate, loading, theme },
  { loadFeedsHandler }
) => ({
  loadFeeds: () => {
    const shouldUpdate = shouldUpdateFeeds(lastFeedUpdate);
    if (!shouldUpdate) return;
    loadFeedsHandler(lastFeedUpdate);
  },
  loading,
  theme,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(MainLayoutComponent);
