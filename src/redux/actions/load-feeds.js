// import { Logger } from '@iziges/napper-core';
import orderby from 'lodash.orderby';

import { EVENT_TYPES } from '../../constants';
import { loadingComplete, loadingStart } from './loading';
import fetchOffersFromFeed from './services/fetch-offers-from-feed';

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
  const offers = orderby(reduced, ['date'], 'desc');
  return offers;
}

const loadFeeds = () => (dispatch, getstate) => {
  const now = Date.now();
  const { feeds } = getstate();
  dispatch(loadingStart());
  const array = feedsToArray(feeds);
  const promises = array.map(buildFeedLoaderPromise(now));
  return Promise.all(promises)
    .then(mergeLoadedFeeds)
    .then(offers => {
      dispatch({ now, offers, type: EVENT_TYPES.OFFERS_LOADED });
    })
    .catch(() => {
      // TODO remplacer par le logger
      // console.log(err);
    })
    .finally(() => {
      dispatch(loadingComplete());
    });
};

export default loadFeeds;
