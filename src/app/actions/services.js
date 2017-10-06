/* eslint
  no-console: 0 */
import orderby from 'lodash.orderby';

// application
import RSSReader from './RSSReader';
import {
  feedsLoaded,
  loadingStart,
  loadingComplete } from './_actions';

export const loadJobsFeeds = () => (dispatch, getstate) => {
  const { feeds } = getstate();
  dispatch(loadingStart());
  const promises = Object.keys(feeds).map(key =>
    RSSReader.getFromURL(key, feeds[key]));
  Promise.all(promises)
    .then((datas) => {
      let feedsitems = datas.reduce((acc, arr) => {
        if (!arr) return acc;
        return acc.concat(arr);
      }, []);
      feedsitems = orderby(feedsitems, ['date'], 'desc');
      dispatch(loadingComplete());
      dispatch(feedsLoaded(feedsitems));
    });
};

export default loadJobsFeeds;
