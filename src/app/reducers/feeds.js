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
  const orderers = ['date', 'mtime'];
  switch (action.type) {
  case 'onaddcardto':
    return orderby(uniq(
      movetostatus(state, action)), orderers, 'desc');
  case 'onoffersloaded':
    // FIXME ->
    // si il y a des nouveaux feeds les ajouter aux feeds existants
    return !action.joboffers || !action.joboffers.length
      ? orderby(uniq(
        state), orderers, 'desc')
      : orderby(uniq(
        action.joboffers.concat(state)), orderers, 'desc');
  case REHYDRATE:
    return orderby(uniq(
      (action.payload.joboffers || [])), orderers, 'desc');
  default:
    return state;
  }
};
