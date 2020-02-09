import queryString from 'query-string';
import storage from 'redux-persist/lib/storage';

const feeds = {
  codeur: {
    isstatic: true,
    url: 'https://www.codeur.com/projects/c/developpement/sc/javascript.rss',
  },
  // indeed: {
  //   isstatic: true,
  //   url: 'http://www.indeed.fr/rss?q=%28javascript%29&l=Montpellier',
  // },
  // jobijoba: {
  //   isstatic: true,
  //   url: 'https://www.jobijoba.com/fr/rss?what=react',
  // },
  // remixjobs: {
  //   isstatic: true,
  //   url: 'http://remixjobs.com/rss',
  // },
  // poleemploi: 'https://api.emploi-store.fr/partenaire/offresdemploi/v1/rechercheroffres'
};

const INITIAL_VALUES = {
  draggingcard: false,
  feeds,
  lastFeedUpdate: Date.now(),
  loading: false,
  offers: [],
  openedCard: false,
  search: '',
  theme: 'day',
};

export const reduxPersistConfig = {
  blacklist: [],
  key: 'LocalStorageKey::',
  storage,
  whitelist: ['lastFeedUpdate', 'offers', 'theme'],
};

export const getInitialState = history => {
  const { search } = history.location;
  const urlparams = queryString.parse(search);
  const initialState = { ...INITIAL_VALUES, ...urlparams };
  return initialState;
};
