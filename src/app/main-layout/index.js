import { connect } from 'react-redux';

import {
  getBrowserRoutes,
  getMenuItems,
  shouldUpdateFeeds,
} from '../../helpers';
import { loadFeeds } from '../../redux/actions';
import routes from '../../routes';
import MainLayoutComponent from './component';

const mapStateToProps = state => {
  const { lastFeedUpdate, loading } = state;
  const menuItems = getMenuItems(routes);
  const browserRoutes = getBrowserRoutes(routes);
  return { browserRoutes, lastFeedUpdate, loading, menuItems };
};

const mapDispatchToProps = dispatch => ({
  loadFeedsHandler: () => dispatch(loadFeeds()),
});

const mergeProps = ({ lastFeedUpdate, ...rest }, { loadFeedsHandler }) => ({
  loadFeeds: () => {
    const shouldUpdate = shouldUpdateFeeds(lastFeedUpdate);
    if (!shouldUpdate) return;
    loadFeedsHandler(lastFeedUpdate);
  },
  ...rest,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(MainLayoutComponent);
