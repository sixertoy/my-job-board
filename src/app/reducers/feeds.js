import orderby from 'lodash.orderby';
import { REHYDRATE } from 'redux-persist/constants';

const removeCardFromSource = (state, type, { source, id }) => {
  if (source !== type) return state;
  return state.filter(obj => (obj.id !== id));
};

const addCardToTarget = (state, type, { target, item }) => {
  if (target !== type) return state;
  return [item].concat(state);
};

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
    return removeCardFromSource(state, 'feeds', action);
  case 'onaddcardto':
    return addCardToTarget(state, 'feeds', action);
  case 'onjoboffersloaded':
    // FIXME ->
    // si il y a des nouveaux feeds les ajouter aux feeds existants
    return !action.joboffers || !action.joboffers.length
      ? state
      : orderby(action.joboffers.reduce((acc, obj) => {
        const exists = acc.filter(({ id }) => id === obj.id).length;
        if (exists) return acc;
        return [obj].concat(acc);
      }, state), ['date'], 'desc');
  case REHYDRATE:
    return action.payload.feedsitems || [];
  default:
    return state;
  }
};

export const todositems = (state = [], action) => {
  switch (action.type) {
  case 'onremovecardfrom':
    return removeCardFromSource(state, 'todo', action);
  case 'onaddcardto':
    return addCardToTarget(state, 'todo', action);
  case REHYDRATE:
    return action.payload.todositems || [];
  default:
    return state;
  }
};

export const inprogressitems = (state = [], action) => {
  switch (action.type) {
  case 'onremovecardfrom':
    return removeCardFromSource(state, 'inprogress', action);
  case 'onaddcardto':
    return addCardToTarget(state, 'inprogress', action);
  case REHYDRATE:
    return action.payload.inprogressitems || [];
  default:
    return state;
  }
};

export const doneitems = (state = [], action) => {
  switch (action.type) {
  case 'onremovecardfrom':
    return removeCardFromSource(state, 'done', action);
  case 'onaddcardto':
    return addCardToTarget(state, 'done', action);
  case REHYDRATE:
    return action.payload.doneitems || [];
  default:
    return state;
  }
};
