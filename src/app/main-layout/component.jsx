// import 'react-toastify/dist/ReactToastify.css';

import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Route, Switch } from 'react-router-dom';
// import { Slide, toast, ToastContainer } from 'react-toastify';
import ReactTooltip from 'react-tooltip';

import AppFooterComponent from './footer';
import AppHeaderComponent from './header';
import AppMenuComponent from './menu';
import ProgressBar from './progress-bar';

const useStyles = createUseStyles(theme => ({
  container: {
    backgroundColor: theme.colors.foreground,
    composes: ['is-full-layout', 'flex-rows'],
  },
  mainlayout: {
    composes: ['flex-columns', 'flex-1', 'no-overflow'],
  },
  views: {
    backgroundColor: theme.colors.background,
    composes: ['flex-columns', 'no-overflow', 'flex-1'],
  },
  wrapper: {
    composes: ['is-full-height', 'flex-rows', 'no-overflow'],
  },
}));

const MainLayoutComponent = ({
  browserRoutes,
  loadFeeds,
  loading,
  menuItems,
}) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  useEffect(() => {
    loadFeeds();
  }, [loadFeeds]);
  return (
    <div className={classes.container} id="app-container">
      <ProgressBar loading={loading} />
      <div className={classes.mainlayout} id="app-main-layout">
        <AppMenuComponent items={menuItems} />
        <div className={classes.wrapper} id="app-wrapper">
          <AppHeaderComponent />
          <div className={classes.views} id="views-container">
            <Switch>
              {browserRoutes.map(obj => {
                return (
                  <Route
                    key={obj.path}
                    exact
                    component={obj.component}
                    path={obj.path}
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
  );
};

MainLayoutComponent.propTypes = {
  browserRoutes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  loadFeeds: PropTypes.func.isRequired,
  // TODO create types for routes
  loading: PropTypes.bool.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default MainLayoutComponent;
