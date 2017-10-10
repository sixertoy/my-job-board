// import find from 'lodash.find';
import { REHYDRATE } from 'redux-persist/constants';
import { UPDATE_INTERVAL_MS } from './../../constants';

// date de la derniers mise a jour des flux
export const nextupdate = (state = false, action) => {
  switch (action.type) {
  case 'onjoboffersloaded':
    return (action.now + UPDATE_INTERVAL_MS);
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
