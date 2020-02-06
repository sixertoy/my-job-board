import { UPDATE_INTERVAL_MS } from '../constants';

const shouldUpdateFeeds = lastFeedUpdate => {
  const now = Date.now();
  const nextUpdateAt = lastFeedUpdate + UPDATE_INTERVAL_MS;
  return now > nextUpdateAt;
};

export default shouldUpdateFeeds;
