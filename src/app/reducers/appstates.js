// import find from 'lodash.find';
import orderby from 'lodash.orderby';
import { REHYDRATE } from 'redux-persist/constants';
import { UPDATE_INTERVAL_MS } from './../../constants';

// date de la derniers mise a jour des flux
export const nextupdate = (state = false, action) => {
  switch (action.type) {
  case 'onfeedsloaded':
    return (Date.now() + UPDATE_INTERVAL_MS);
  case REHYDRATE:
    // FIXME -> cannot unvalidate expires
    return action.payload.nextupdate || false;
  default:
    return state;
  }
};

// quand le store est chargé
export const isready = (state = false, action) => {
  switch (action.type) {
  case REHYDRATE: // applicationisready
    return true;
  default:
    return state;
  }
};

export const isloaded = (state = false, action) => {
  switch (action.type) {
  case 'onfeedsloaded':
    return true;
  default:
    return state;
  }
};

export const feeds = (state = [
  // FIXME ->
  // au lieu d'un tableau faire un object
  // les cles seront le nom de la source d'ou proviennent les feeds
  'http://remixjobs.com/rss',
  'http://www.indeed.fr/rss?q=%28javascript%29&l=Montpellier'
], action) => {
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
    return orderby(action.feedsitems, ['date'], 'desc');
  case REHYDRATE:
    return action.payload.feedsitems || [];
  default:
    return state;
  }
};
