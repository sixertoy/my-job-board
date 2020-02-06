import { EVENT_TYPES } from '../../constants';

export const lastFeedUpdate = (state = 0, action) => {
  switch (action.type) {
    case EVENT_TYPES.PERSIST_REHYDRATE:
      return (action.payload && action.payload.lastFeedUpdate) || 0;
    case EVENT_TYPES.OFFERS_LOADED:
      return action.now;
    default:
      return state;
  }
};

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
