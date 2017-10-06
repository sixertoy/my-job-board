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
  console.log('loadJobsFeeds', loadJobsFeeds);
  const { feeds } = getstate();
  dispatch(loadingStart());
  const promises = feeds.map(RSSReader.getFromURL);
  Promise.all(promises)
    .then((datas) => {
      let feedsitems = datas.reduce((acc, arr) => {
        if (!arr) return acc;
        return acc.concat(arr);
      }, []);
      feedsitems = orderby(feedsitems, ['date'], 'desc');
      console.log('feedsitems', feedsitems);
      dispatch(loadingComplete());
      dispatch(feedsLoaded(feedsitems));
    });
};

export default loadJobsFeeds;
