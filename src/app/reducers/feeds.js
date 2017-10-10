import orderby from 'lodash.orderby';
import { REHYDRATE } from 'redux-persist/constants';

const movetostatus = (state, { status, item }) => {
  const parsed = state.reduce((acc, obj) => {
    const object = Object.assign({}, obj);
    if (obj.id === item.id) object.status = status;
    return [object].concat(acc);
  }, []);
  return orderby(parsed, ['date'], 'desc');
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
  case 'onaddcardto':
    return movetostatus(state, action);
  case 'onoffersloaded':
    // FIXME ->
    // si il y a des nouveaux feeds les ajouter aux feeds existants
    return !action.items || !action.items.length
      ? state
      : orderby(action.items.reduce((acc, obj) => {
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
