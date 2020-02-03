import queryString from 'query-string';

const INITIAL_VALUES = {
  comment: '',
  draggingcard: false,
  isloading: true,
  isready: true,
  lastupdate: 0,
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
