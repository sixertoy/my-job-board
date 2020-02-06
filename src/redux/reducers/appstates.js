import { EVENT_TYPES } from '../../constants';

// date de la derniere mise a jour des flux
export const lastupdate = (state = 0, action) => {
  switch (action.type) {
    case EVENT_TYPES.OFFERS_LOADED:
      return action.now;
    // case REHYDRATE:
    // return action.payload.lastupdate || state;
    default:
      return state;
  }
};

// quand les données persistantes du browser sont chargées
export const isready = (state = false, action) => {
  switch (action.type) {
    // case REHYDRATE: // applicationisready
    // return true;
    default:
      return state;
  }
};

// quand une mise à jour des feeds est chargé
export const loading = (state = false, action) => {
  switch (action.type) {
    case EVENT_TYPES.LOADING_START:
      return true;
    case EVENT_TYPES.LOADING_COMPLETE:
      return false;
    default:
      return state;
  }
};

export const search = (state = '', action) => {
  switch (action.type) {
    case 'onfilterfeeds':
      return action.inputvalue;
    default:
      return state;
  }
};

export const comment = (state = '', action) => {
  switch (action.type) {
    case 'oncloseoverlaycard':
      return '';
    case 'oncommentchange':
      return action.inputvalue;
    default:
      return state;
  }
};
