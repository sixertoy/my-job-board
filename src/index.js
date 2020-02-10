// import './fontello/css/fontello-embedded.css';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light-border.css';
import './index.scss';
import 'moment/locale/fr';

import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'react-jss';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import MainLayoutComponent from './components/layout';
import getRouterHistory from './history';
import { getInitialState } from './initial-state';
import { configure } from './redux/store';
import theme from './theme';

const history = getRouterHistory();
const initialState = getInitialState(history);
const { persistor, store } = configure(history, initialState);

const Root = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <MainLayoutComponent />
        </BrowserRouter>
      </ThemeProvider>
    </PersistGate>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
