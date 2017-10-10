/* eslint
  no-console: 0 */
import orderby from 'lodash.orderby';

// application
import JobOffers from './../core/JobOffers';
import {
  loadingStart,
  jobOffersLoaded,
  loadingComplete } from './_actions';

export const loadProviderFeeds = () => (dispatch, getstate) => {
  dispatch(loadingStart());
  const now = Date.now();
  const { feeds } = getstate(); // feeds URLs
  const promises = Object.keys(feeds)
    .map((key) => {
      const url = feeds[key];
      return JobOffers.load(url, key, now);
    });
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
