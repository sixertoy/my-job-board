import orderby from 'lodash.orderby';
import { REHYDRATE } from 'redux-persist/constants';

export const feeds = (state = {
  // FIXME ->
  // au lieu d'un tableau faire un object
  // les cles seront le nom de la source d'ou proviennent les feeds
  remixjobs: 'http://remixjobs.com/rss',
  indeed: 'http://www.indeed.fr/rss?q=%28javascript%29&l=Montpellier'
}, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export const feedsitems = (state = [], action) => {
  switch (action.type) {
  // case 'onMoveCard':
  // find(state, { id: action.from });
  // return state;
  case 'onfeedsloaded':
    // FIXME ->
    // si il y a des nouveaux feeds les ajouter aux feeds existants
    return !action.feedsitems || !action.feedsitems.length
      ? state
      : orderby(action.feedsitems, ['date'], 'desc');
  case REHYDRATE:
    return action.payload.feedsitems || [];
  default:
    return state;
  }
};

export const todositems = (state = [], action) => {
  switch (action.type) {
  // case 'onMoveCard':
  // find(state, { id: action.from });
  // return state;
  case 'onmovecard':
    return [];
  case REHYDRATE:
    return action.payload.todositems || [];
  default:
    return state;
  }
};
