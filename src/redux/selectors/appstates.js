import { createSelector } from 'reselect';

// application
import { UPDATE_INTERVAL_MS } from '../../constants';

const getLastFeedUpdate = state => state.lastFeedUpdate;

export const getNextUpdate = createSelector(
  [getLastFeedUpdate],
  lastFeedUpdate => (lastFeedUpdate && lastFeedUpdate + UPDATE_INTERVAL_MS) || 0
);

export default getNextUpdate;
