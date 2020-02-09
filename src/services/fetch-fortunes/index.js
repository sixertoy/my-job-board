import services from './services';

const REQUEST_SUCCESS_STATUS = [200, 201];
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const FETCH_OPTS = { header: new Headers({}), method: 'GET' };

function resolveRequest(type = 'json') {
  return response => {
    const { status } = response;
    // sucess -> 200, 201
    // error -> 404, 403, 400
    const isSuccess = REQUEST_SUCCESS_STATUS.includes(status);
    if (isSuccess) return response[type]();
    const err = new Error(`Request failed`);
    return Promise.reject(err);
  };
}

function mapDataToServiceId(id) {
  return data => ({ [id]: data });
}

function createServicePromise({ id, parser, type, url }) {
  const serviceURL = `${PROXY_URL}${url}`;
  return fetch(serviceURL, FETCH_OPTS)
    .then(resolveRequest(type))
    .then(parser)
    .then(mapDataToServiceId(id))
    .catch(err => {
      const reason = new Error(`${err.message}`);
      // TODO utilise napper-core/logger
      console.log(reason);
    });
}

function reduceResultsToObject(results) {
  const reduced = results.reduce((acc, obj) => ({ ...acc, ...obj }), {});
  return reduced;
}

const fetchFortunes = () => {
  const promises = services.map(createServicePromise);
  return Promise.all(promises).then(reduceResultsToObject);
};

export default fetchFortunes;
