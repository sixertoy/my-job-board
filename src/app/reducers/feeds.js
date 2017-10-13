import find from 'lodash.find';
import orderby from 'lodash.orderby';
import { REHYDRATE } from 'redux-persist/constants';

export const feeds = (state = {
  // FIXME ->
  // au lieu d'un tableau faire un object
  // les cles seront le nom de la source d'ou proviennent les feeds
  remixjobs: {
    isstatic: true,
    url: 'http://remixjobs.com/rss'
  },
  indeed: {
    isstatic: true,
    url: 'http://www.indeed.fr/rss?q=%28javascript%29&l=Montpellier'
  }
  // poleemploi: 'https://api.emploi-store.fr/partenaire/offresdemploi/v1/rechercheroffres'
}, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

const movetostatus = (state, { status, item }) => {
  const parsed = state.reduce((acc, obj) => {
    const object = Object.assign({}, obj);
    if (obj.id === item.id) {
      object.status = status;
      object.mtime = Date.now();
    }
    return [object].concat(acc);
  }, []);
  return orderby(parsed, ['mtime'], 'desc');
};

const removeduplicates = (stored, loaded) =>
  loaded.filter(({ date, title }) => !find(stored, { date, title }));

export const joboffers = (state = [], action) => {
  switch (action.type) {
  case 'onaddcardto':
    return movetostatus(state, action);
  case 'onoffersloaded':
    // FIXME ->
    // si il y a des nouveaux feeds les ajouter aux feeds existants
    return !action.joboffers || !action.joboffers.length
      ? state
      : orderby(
        removeduplicates(state, action.joboffers).concat(state),
        ['date'],
        'desc'
      );
  case REHYDRATE:
    return action.payload.joboffers || [];
  default:
    return state;
  }
};
