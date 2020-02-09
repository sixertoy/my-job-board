const REQUEST_SUCCESS_STATUS = [200, 201];
const SERVICE_URL =
  'https://raw.githubusercontent.com/nirajpandkar/git-tip/master/tips.json';

function resolveRequest(response) {
  const { status } = response;
  // sucess -> 200, 201
  // error -> 404, 403, 400
  const isSuccess = REQUEST_SUCCESS_STATUS.includes(status);
  if (isSuccess) return response.json();
  const err = new Error(`Request failed`);
  return Promise.reject(err);
}

function parseGitTips(payload) {
  const len = payload.length;
  const rand = Math.floor(Math.random() * len);
  const tips = payload[rand];
  return tips;
}

const fetchFortuneCookies = () => {
  const opts = { header: new Headers({}), method: 'GET' };
  return fetch(SERVICE_URL, opts)
    .then(resolveRequest)
    .then(parseGitTips)
    .catch(err => {
      const reason = new Error(`${err.message}`);
      // TODO utilise napper-core/logger
      console.log(reason);
    });
};

export default fetchFortuneCookies;
