// import { Logger } from '@iziges/napper-core';

import { EVENT_TYPES } from '../../constants';
import fetchFortuneCookies from '../../services/fetch-fortune-cookies';

const loadFortuneCookies = () => dispatch => {
  const promise = fetchFortuneCookies();
  return promise
    .then(data => {
      dispatch({ data, type: EVENT_TYPES.FORTUNE_COOKIES_LOADED });
    })
    .catch(err => {
      // TODO remplacer par le logger
      console.log(err);
    })
    .finally(() => {});
};

export default loadFortuneCookies;
