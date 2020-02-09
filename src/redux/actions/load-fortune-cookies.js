// import { Logger } from '@iziges/napper-core';

import { EVENT_TYPES } from '../../constants';
import {
  fetchFortuneCookies,
  fetchFunFact,
  fetchGeekQuote,
  fetchGipTips,
  fetchIsThisForThat,
  fetchKanyeQuote,
  fetchOpinionatedQuote,
  fetchPoem,
  fetchTRBMB,
  fetchTrumpQuote,
} from '../../services/fortunes';

const loadFortuneCookies = () => dispatch => {
  return Promise.all([
    fetchFortuneCookies(),
    fetchGipTips(),
    fetchKanyeQuote(),
    fetchFunFact(),
    fetchOpinionatedQuote(),
    fetchGeekQuote(),
    fetchPoem(),
    fetchTRBMB(),
    fetchTrumpQuote(),
    fetchIsThisForThat(),
  ])
    .then(
      ([
        cookies,
        tips,
        kanye,
        funfact,
        opinion,
        geek,
        poem,
        trbmb,
        trump,
        isthisforthat,
      ]) => {
        const data = {
          cookies,
          funfact,
          geek,
          isthisforthat,
          kanye,
          opinion,
          poem,
          tips,
          trbmb,
          trump,
        };
        dispatch({ data, type: EVENT_TYPES.FORTUNE_COOKIES_LOADED });
      }
    )
    .catch(err => {
      // TODO remplacer par le logger
      console.log(err);
    })
    .finally(() => {});
};

export default loadFortuneCookies;
