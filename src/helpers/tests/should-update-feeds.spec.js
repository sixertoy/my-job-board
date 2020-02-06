import { UPDATE_INTERVAL_MS } from '../../constants';
import shouldUpdateFeeds from '../should-update-feeds';

describe('src | helpers | should-update-feeds', () => {
  it('should not update', () => {
    const time = 60 * 59 * 1000;
    const lastFeedUpdate = Date.now() + UPDATE_INTERVAL_MS + time;
    const result = shouldUpdateFeeds(lastFeedUpdate);
    expect(result).toStrictEqual(false);
  });

  it('should update', () => {
    const time = 60 * 59 * 1000;
    const lastFeedUpdate = Date.now() - UPDATE_INTERVAL_MS - time;
    const result = shouldUpdateFeeds(lastFeedUpdate);
    expect(result).toStrictEqual(true);
  });
});
