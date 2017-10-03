import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, browserHistory } from 'react-router';

// application
import './index.css';
import MainScreen from './app/MainScreen';
import { configure } from './app/core/storage';
import registerServiceWorker from './registerServiceWorker';

// application
const store = configure(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);
const Root = () => (
  <Provider store={store}>
    <div id="main-container">
      <Router history={history}>
        <Route path={'/'} component={MainScreen} />
      </Router>
    </div>
  </Provider>
);

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
registerServiceWorker();
