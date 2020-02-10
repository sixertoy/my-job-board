import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light-border.css';
import './index.scss';
import 'moment/locale/fr';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import Application from './components/app';
import getRouterHistory from './history';
import { getInitialState } from './initial-state';
import { configure } from './redux/store';

const history = getRouterHistory();
const initialState = getInitialState(history);
const { persistor, store } = configure(history, initialState);

const Root = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Application />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));