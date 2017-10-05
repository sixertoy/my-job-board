/* eslint
  no-console: 0 */
import * as orderby from 'lodash.orderby';

// application
import RSSReader from './RSSReader';
import {
  feedsLoaded,
  loadingStart,
  loadingComplete } from './_actions';

export const loadJobsFeeds = () => (dispatch, getstate) => {
  const { feeds } = getstate();
  dispatch(loadingStart());
  const promises = feeds.map(RSSReader.getFromURL);
  Promise.all(promises)
    .then((datas) => {
      let feedsitems = datas.reduce((acc, arr) => {
        if (!arr) return acc;
        return acc.concat(arr);
      }, []);
      feedsitems = orderby(feedsitems, ['date'], 'asc');
      dispatch(loadingComplete());
      dispatch(feedsLoaded(feedsitems));
    });
};

export default loadJobsFeeds;
