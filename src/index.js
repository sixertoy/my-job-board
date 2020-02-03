// import './index.css';
// import './fontello/css/fontello-embedded.css';

import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import getInitialState from './redux/initial-state';
import { configure } from './redux/store';
// import KanbanBoard from './app/KanbanBoard';

const history = createBrowserHistory();
const initialState = getInitialState(history);
const { persistor, store } = configure(history, initialState);

const Root = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <div id="main-container">
          {/* <Route path={'/'} component={KanbanBoard} /> */}
        </div>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
