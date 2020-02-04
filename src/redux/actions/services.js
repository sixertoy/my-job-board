/* eslint
  no-console: 0 */
import orderby from 'lodash.orderby';

// application
import JobOffers from './../core/joboffers';
import {
  loadingStart,
  offersLoaded,
  loadingComplete } from './_actions';

/*
const resolveAPIRequest = resp => ((resp.status !== 200 && resp.status !== 201)
  ? Promise.resolve(false)
  : resp.text());

export const loadAPIFeeds = (url, key, now) => {
  const request = {
    params: { sort: 1, per_page: 100 },
    criterias: { departmentCode: '34', keywords: 'développeur' }
  };
  return fetch(`${url}`, {
    method: 'POST',
    header: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8'
    }),
    body: JSON.stringify(request)
  })
    .then(resolveAPIRequest)
    .then((body) => {
      console.log('body', body);
    });
};
*/

export const loadProviderFeeds = () => (dispatch, getstate) => {
  dispatch(loadingStart());
  const now = Date.now();
  const { feeds } = getstate(); // feeds URLs
  const promises = Object.keys(feeds)
    .map((key) => {
      const { url } = feeds[key];
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
      dispatch(offersLoaded(joboffers, now));
    });
};

export default loadProviderFeeds;
