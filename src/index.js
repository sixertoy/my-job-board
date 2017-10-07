import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, Route, hashHistory } from 'react-router';

// application
import './index.css';
import KanbanBoard from './app/KanbanBoard';
import { configure } from './app/core/storage';
import registerServiceWorker from './registerServiceWorker';

// application
const store = configure(hashHistory);
const history = syncHistoryWithStore(hashHistory, store);
const Root = () => (
  <Provider store={store}>
    <div id="main-container">
      <Router history={history}>
        <Route path={'/'} component={KanbanBoard} />
      </Router>
    </div>
  </Provider>
);

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
registerServiceWorker();
