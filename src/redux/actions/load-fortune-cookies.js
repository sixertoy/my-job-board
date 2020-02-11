// import { Logger } from '@iziges/napper-core';

import { EVENT_TYPES } from '../../constants';
import fetchFortunes from '../../services/fetch-fortunes';

const loadFortuneCookies = () => dispatch => {
  return fetchFortunes()
    .then(data => {
      dispatch({ data, type: EVENT_TYPES.FORTUNE_COOKIES_LOADED });
    })
    .catch(() => {
      // TODO remplacer par le logger
      // console.log(err);
    })
    .finally(() => {});
};

export default loadFortuneCookies;
