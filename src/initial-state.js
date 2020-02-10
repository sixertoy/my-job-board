import queryString from 'query-string';
import storage from 'redux-persist/lib/storage';

const feeds = {
  codeur: {
    isstatic: true,
    url: 'https://www.codeur.com/projects/c/developpement/sc/javascript.rss',
  },
  // indeed: {
  //   url: 'http://www.indeed.fr/rss?q=javascript',
  //   url: 'http://www.indeed.fr/rss?q=react',
  //   url: 'http://www.indeed.fr/rss?q=freelance',
  //   url: 'http://www.indeed.fr/rss?q=reactjs'
  //   url: 'http://www.indeed.fr/rss?q=remote',
  //   url: 'http://www.indeed.fr/rss?q=frontend',
  // },
  // jobijoba: {
  //   url: 'https://www.jobijoba.com/fr/rss?what=javascript',
  //   url: 'https://www.jobijoba.com/fr/rss?what=react',
  //   url: 'https://www.jobijoba.com/fr/rss?what=freelance'
  //   url: 'https://www.jobijoba.com/fr/rss?what=reactjs'
  //   url: 'https://www.jobijoba.com/fr/rss?what=remote',
  //   url: 'https://www.jobijoba.com/fr/rss?what=frontend'
  // },
  // remixjobs: {
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
  selectedTheme: 'day',
};

export const reduxPersistConfig = {
  blacklist: [],
  key: 'LocalStorageKey::',
  storage,
  whitelist: ['lastFeedUpdate', 'offers', 'selectedTheme'],
};

export const getInitialState = history => {
  const { search } = history.location;
  const urlparams = queryString.parse(search);
  const initialState = { ...INITIAL_VALUES, ...urlparams };
  return initialState;
};
