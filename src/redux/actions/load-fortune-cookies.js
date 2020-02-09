// import { Logger } from '@iziges/napper-core';

import { EVENT_TYPES } from '../../constants';
import fetchFortuneCookies from '../../services/fetch-fortune-cookies';
import fetchGipTips from '../../services/fetch-git-tips';

const loadFortuneCookies = () => dispatch => {
  return Promise.all([fetchFortuneCookies(), fetchGipTips()])
    .then(([fortune, tips]) => {
      const data = { ...fortune, tips };
      dispatch({ data, type: EVENT_TYPES.FORTUNE_COOKIES_LOADED });
    })
    .catch(err => {
      // TODO remplacer par le logger
      console.log(err);
    })
    .finally(() => {});
};

export default loadFortuneCookies;
