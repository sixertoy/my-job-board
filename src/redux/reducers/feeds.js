import orderby from 'lodash.orderby';
import uniqby from 'lodash.uniqby';

import { EVENT_TYPES } from '../../constants';
// import { REHYDRATE } from 'redux-persist/constants';

export const feeds = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const uniq = items => uniqby(uniqby(items, 'link'), 'id');

const updateofferfield = (state, { fieldname, inputvalue, offerid }) =>
  state.map(obj =>
    obj.id !== offerid
      ? obj
      : {
          ...obj,
          [fieldname]:
            typeof inputvalue === 'string' ? inputvalue.trim() : inputvalue,
        }
  );

const movetostatus = (state, { item, status }) =>
  state.reduce((acc, obj) => {
    const object = { ...obj };
    if (obj.id === item.id) {
      object.status = status;
      object.mtime = Date.now();
    }
    return [object].concat(acc);
  }, []);

export const offers = (state = [], action) => {
  let results = [];
  switch (action.type) {
    case 'onofferfieldchange':
      results = updateofferfield(state, action);
      break;
    case 'onaddcardto':
      results = movetostatus(state, action);
      break;
    case EVENT_TYPES.OFFERS_LOADED:
      // FIXME ->
      // si il y a des nouveaux feeds les ajouter aux feeds existants
      results =
        !action.offers || !action.offers.length
          ? [].concat(state)
          : action.offers.concat(state);
      break;
    // case REHYDRATE:
    // results = [].concat(action.payload.offers || []);
    // break;
    default:
      results = [].concat(state);
      break;
  }
  return orderby(uniq(results), ['date', 'mtime'], 'desc');
};
