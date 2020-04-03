import queryString from 'query-string';
import storage from 'redux-persist/lib/storage';
// import uuidv1 from 'uuid/v1';

const now = Date.now();

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

// const notes = [
//   {
//     content: '## This is a header\n\nAnd this is a paragraph\n- toto',
//     ctime: now,
//     id: uuidv1(),
//     label: 'titi',
//     mtime: now,
//     title: 'title',
//   },
//   {
//     content: '### This is a header\n\nAnd this is a paragraph',
//     ctime: now,
//     id: uuidv1(),
//     label: 'toto',
//     mtime: now,
//     title: 'title',
//   },
//   {
//     content: '# This is a header\n\nAnd this is a paragraph',
//     ctime: now,
//     id: uuidv1(),
//     label: 'tata',
//     mtime: now,
//     title: 'title',
//   },
//   {
//     content: '### This is a header\n\nAnd this is a paragraph',
//     ctime: now,
//     id: uuidv1(),
//     label: 'tutu',
//     mtime: now,
//     title: 'title',
//   },
//   {
//     content: '#### This is a header\n\nAnd this is a paragraph',
//     ctime: now,
//     id: uuidv1(),
//     label: 'tyty',
//     mtime: now,
//     title: 'title',
//   },
//   {
//     content: '## This is a header\n\nAnd this is a paragraph',
//     ctime: now,
//     id: uuidv1(),
//     label: 'tete',
//     mtime: now,
//     title: 'title',
//   },
// ];

const INITIAL_VALUES = {
  draggingcard: false,
  feeds,
  lastFeedUpdate: now,
  lists: [],
  loading: false,
  notes: [],
  offers: [],
  openedCard: false,
  projects: [],
  search: '',
  selectedTheme: 'day',
};

export const reduxPersistConfig = {
  blacklist: [],
  key: 'LocalStorageKey::',
  storage,
  whitelist: ['lastFeedUpdate', 'offers', 'selectedTheme', 'projects', 'lists'],
};

export const getInitialState = history => {
  const { search } = history.location;
  const urlparams = queryString.parse(search);
  const initialState = { ...INITIAL_VALUES, ...urlparams };
  return initialState;
};
