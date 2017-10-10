/* eslint
  no-console: 0 */
import orderby from 'lodash.orderby';

// application
import RSSReader from './../core/RSSReader';
import {
  loadingStart,
  jobOffersLoaded,
  loadingComplete } from './_actions';

export const loadProviderFeeds = () => (dispatch, getstate) => {
  dispatch(loadingStart());
  const now = Date.now();
  const { feeds } = getstate(); // feeds URLs
  const promises = Object.keys(feeds)
    .map(key => RSSReader.getFromURL(key, feeds[key], now));
  Promise.all(promises)
    .then((datas) => {
      let joboffers = datas.reduce((acc, arr) => {
        if (!arr) return acc;
        return acc.concat(arr);
      }, []);
      joboffers = orderby(joboffers, ['date'], 'desc');
      dispatch(loadingComplete());
      dispatch(jobOffersLoaded(joboffers, now));
    });
};

export default loadProviderFeeds;
