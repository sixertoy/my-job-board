import { createBrowserHistory } from 'history';

let HISTORY_INSTANCE = null;

function getRouterHistory() {
  if (HISTORY_INSTANCE) return HISTORY_INSTANCE;
  HISTORY_INSTANCE = createBrowserHistory();
  return HISTORY_INSTANCE;
}

export default getRouterHistory;
