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
  case 'onremovecardfrom':
    if (action.source !== 'feeds') return state;
    return state
      .filter(({ id }) => (action.id !== id));
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
  case 'onremovecardfrom':
    if (action.source !== 'todo') return state;
    return state
      .filter(({ id }) => (action.id !== id));
  case 'onaddcardto':
    if (action.target !== 'todo') return state;
    return [action.obj].concat(state);
  case REHYDRATE:
    return action.payload.todositems || [];
  default:
    return state;
  }
};

export const inprogressitems = (state = [], action) => {
  switch (action.type) {
  case 'onremovecardfrom':
    if (action.source !== 'inprogress') return state;
    return state
      .filter(({ id }) => (action.id !== id));
  case 'onaddcardto':
    if (action.target !== 'inprogress') return state;
    return [action.obj].concat(state);
  case REHYDRATE:
    return action.payload.inprogressitems || [];
  default:
    return state;
  }
};

export const doneitems = (state = [], action) => {
  switch (action.type) {
  case 'onremovecardfrom':
    if (action.source !== 'done') return state;
    return state
      .filter(({ id }) => (action.id !== id));
  case 'onaddcardto':
    if (action.target !== 'done') return state;
    return [action.obj].concat(state);
  case REHYDRATE:
    return action.payload.doneitems || [];
  default:
    return state;
  }
};
