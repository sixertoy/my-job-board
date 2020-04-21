import React from 'react';
import { createUseStyles, ThemeProvider } from 'react-jss';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import ReactTooltip from 'react-tooltip';
import { createSelector } from 'reselect';

import { getBrowserRoutes } from '../helpers';
import routes from '../routes';
import { getThemeByThemeKey } from '../theme';
import AppFooterComponent from './main-layout/footer';
import AppHeaderComponent from './main-layout/header';
import AppMenuComponent from './main-layout/menu';
import ProgressBar from './main-layout/progress-bar';

const useStyles = createUseStyles({
  container: {
    backgroundColor: ({ theme }) => theme.colors.foreground,
    composes: ['is-full-layout', 'flex-rows'],
  },
  mainlayout: {
    composes: ['flex-columns', 'flex-1', 'no-overflow'],
  },
  views: {
    backgroundColor: ({ theme }) => theme.colors.background,
    composes: ['flex-columns', 'no-overflow', 'flex-1'],
  },
  wrapper: {
    composes: ['is-full-height', 'flex-rows', 'no-overflow'],
  },
});

const selectThemeFromKey = createSelector(
  state => state.selectedTheme,
  key => getThemeByThemeKey(key)
);

const browserRoutes = getBrowserRoutes(routes);

const Application = () => {
  const theme = useSelector(selectThemeFromKey);
  const classes = useStyles({ theme });
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <div className={classes.container} id="app-container">
          <ProgressBar />
          <div className={classes.mainlayout} id="app-main-layout">
            <AppMenuComponent />
            <div className={classes.wrapper} id="app-wrapper">
              <AppHeaderComponent />
              <div className={classes.views} id="views-container">
                <Switch>
                  {browserRoutes.map(route => {
                    return (
                      <Route
                        key={route.path}
                        exact
                        component={route.component}
                        path={route.path}
                      />
                    );
                  })}
                </Switch>
                {/* {draggingcard && <DraggableCard />} */}
              </div>
            </div>
          </div>
          <AppFooterComponent />
          {/* <ToastContainer
              hideProgressBar
              position={toast.POSITION.TOP_CENTER}
              transition={Slide}
            /> */}
          <ReactTooltip effect="solid" place="right" />
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default Application;
