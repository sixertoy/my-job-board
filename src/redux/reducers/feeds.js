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

// TODO utiliser lodash.chain
const uniq = items => uniqby(uniqby(items, 'link'), 'id');

// const updateofferfield = (state, { fieldname, inputvalue, offerid }) =>
//   state.map(obj =>
//     obj.id !== offerid
//       ? obj
//       : {
//           ...obj,
//           [fieldname]:
//             typeof inputvalue === 'string' ? inputvalue.trim() : inputvalue,
//         }
//   );

const onMoveCardStatus = ({ id, status }, state) => {
  const reduced = state.reduce((acc, obj) => {
    const object = { ...obj };
    if (obj.id === id) {
      object.status = status;
      object.mtime = Date.now();
    }
    return [object].concat(acc);
  }, []);
  return reduced;
};

function onRehydrateHandler(action) {
  const res = (action.payload && action.payload.offers) || [];
  return [...res];
}

function onOffersLoadedHandler(action, state) {
  const res =
    !action.offers || !action.offers.length
      ? [].concat(state)
      : action.offers.concat(state);
  return [...res];
}

export const offers = (state = [], action) => {
  let next = [];
  switch (action.type) {
    // case 'onofferfieldchange':
    //   next = updateofferfield(state, action);
    //   break;
    case EVENT_TYPES.MOVE_CARD_STATUS:
      next = onMoveCardStatus(action, state);
      break;
    case EVENT_TYPES.PERSIST_REHYDRATE:
      next = onRehydrateHandler(action);
      break;
    case EVENT_TYPES.OFFERS_LOADED:
      next = onOffersLoadedHandler(action, state);
      break;
    default:
      next = [...(state || [])];
      break;
  }
  next = uniq(next);
  next = orderby(next, ['date', 'mtime'], 'desc');
  return next;
};
