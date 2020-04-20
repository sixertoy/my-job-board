import 'moment/locale/fr';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light-border.css';
import './index.scss';

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import Application from './app/application';
import getRouterHistory from './core/history';
import { configure } from './core/store';
import { getInitialState } from './redux/initial-state';
import routes from './routes';

const history = getRouterHistory();
const initialState = getInitialState(history);
const { persistor, store } = configure(history, initialState);

const Root = () => (
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          {/* ReactJSS ThemeProvider in used in Application */}
          <Application routes={routes} />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);

ReactDOM.render(<Root />, document.getElementById('root'));
