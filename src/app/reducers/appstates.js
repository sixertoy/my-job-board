// import find from 'lodash.find';
import { REHYDRATE } from 'redux-persist/constants';
import { UPDATE_INTERVAL_MS } from './../../constants';

// date de la derniere mise a jour des flux
export const lastupdate = (state = 0, action) => {
  switch (action.type) {
  case 'onoffersloaded':
    return action.now;
  case REHYDRATE:
    return action.payload.lastupdate || state;
  default:
    return state;
  }
};

// date de la prochaine mise a jour des flux
export const nextupdate = (state = 0, action) => {
  switch (action.type) {
  case 'onoffersloaded':
    return (action.now + UPDATE_INTERVAL_MS);
  case REHYDRATE:
    // FIXME -> cannot unvalidate expires
    return action.payload.nextupdate || 0;
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

export const isloading = (state = false, action) => {
  switch (action.type) {
  case 'onloadingstart':
    return true;
  case 'onloadingcomplete':
    return false;
  default:
    return state;
  }
};
