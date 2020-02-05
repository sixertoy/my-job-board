import queryString from 'query-string';

const feeds = {
  codeur: {
    isstatic: true,
    url: 'https://www.codeur.com/projects/c/developpement/sc/react.rss',
  },
  indeed: {
    isstatic: true,
    url: 'http://www.indeed.fr/rss?q=%28javascript%29&l=Montpellier',
  },
  // remixjobs: {
  //   isstatic: true,
  //   url: 'http://remixjobs.com/rss',
  // },
  jobijoba: {
    isstatic: true,
    url: 'https://www.jobijoba.com/fr/rss?what=react',
  },
  // poleemploi: 'https://api.emploi-store.fr/partenaire/offresdemploi/v1/rechercheroffres'
};

const INITIAL_VALUES = {
  comment: '',
  draggingcard: false,
  feeds,
  isready: true,
  lastupdate: 0,
  loading: true,
  openedcard: false,
  search: '',
};

const getInitialState = history => {
  const { search } = history.location;
  const urlparams = queryString.parse(search);
  const initialState = { ...INITIAL_VALUES, ...urlparams };
  return initialState;
};

export default getInitialState;
