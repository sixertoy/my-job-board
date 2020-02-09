import get from 'lodash.get';

const REQUEST_SUCCESS_STATUS = [200, 201];

function resolveRequest(response) {
  const { status } = response;
  // sucess -> 200, 201
  // error -> 404, 403, 400
  const isSuccess = REQUEST_SUCCESS_STATUS.includes(status);
  if (isSuccess) return response.json();
  const err = new Error(`Request failed`);
  return Promise.reject(err);
}

function parse(payload) {
  return payload && get(payload, '0');
}

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const SERVICE_URL = 'https://api.chew.pro/trbmb';
const fetchApi = () => {
  const opts = { header: new Headers({}), method: 'GET' };
  return fetch(`${PROXY_URL}${SERVICE_URL}`, opts)
    .then(resolveRequest)
    .then(parse)
    .catch(err => {
      const reason = new Error(`${err.message}`);
      // TODO utilise napper-core/logger
      console.log(reason);
    });
};

export default fetchApi;
