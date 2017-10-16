import uniqby from 'lodash.uniqby';
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
  },
  jobijoba: {
    isstatic: true,
    url: 'https://www.jobijoba.com/fr/rss?what=react'
  }
  // poleemploi: 'https://api.emploi-store.fr/partenaire/offresdemploi/v1/rechercheroffres'
}, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

const uniq = items =>
  uniqby(uniqby(items, 'link'), 'id');

const updateofferfield = (state, { inputvalue, offerid, fieldname }) =>
  state.map(obj => ((obj.id !== offerid) ? obj
    : Object.assign({}, obj, {
      [fieldname]: (typeof inputvalue === 'string') ? inputvalue.trim() : inputvalue
    })));

const movetostatus = (state, { status, item }) =>
  state.reduce((acc, obj) => {
    const object = Object.assign({}, obj);
    if (obj.id === item.id) {
      object.status = status;
      object.mtime = Date.now();
    }
    return [object].concat(acc);
  }, []);

export const joboffers = (state = [], action) => {
  let results = [];
  switch (action.type) {
  case 'onofferfieldchange':
    results = updateofferfield(state, action);
    break;
  case 'onaddcardto':
    results = movetostatus(state, action);
    break;
  case 'onoffersloaded':
    // FIXME ->
    // si il y a des nouveaux feeds les ajouter aux feeds existants
    results = !action.joboffers || !action.joboffers.length ? [].concat(state)
      : action.joboffers.concat(state);
    break;
  case REHYDRATE:
    results = [].concat(action.payload.joboffers || []);
    break;
  default:
    results = [].concat(state);
    break;
  }
  return orderby(uniq(results), ['date', 'mtime'], 'desc');
};
