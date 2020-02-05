// import { Logger } from '@iziges/napper-core';
import orderby from 'lodash.orderby';

import fetchOffersFromFeed from '../../proxies/fetch-offers-from-feed';
import { loadingComplete, loadingStart } from './loading';

function feedsToArray(feeds) {
  const keys = Object.keys(feeds);
  const arr = keys.map(key => ({ ...feeds[key], key }));
  return arr;
}

function buildFeedLoaderPromise(now) {
  return feed => {
    const promise = fetchOffersFromFeed(feed, now);
    return promise;
  };
}

function mergeLoadedFeeds(datas) {
  const reduced = (datas || []).reduce((acc, arr) => {
    if (!arr) return acc;
    return acc.concat(arr);
  }, []);
  const joboffers = orderby(reduced, ['date'], 'desc');
  return joboffers;
}

const loadFeeds = () => (dispatch, getstate) => {
  dispatch(loadingStart());
  const now = Date.now();
  const { feeds } = getstate();
  const array = feedsToArray(feeds);
  const promises = array.map(buildFeedLoaderPromise(now));
  return Promise.all(promises)
    .then(mergeLoadedFeeds)
    .then(joboffers => {
      dispatch({ joboffers, now, type: 'onoffersloaded' });
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      dispatch(loadingComplete());
    });
};

export default loadFeeds;
