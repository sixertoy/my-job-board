import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import AppFooterComponent from '../app-footer';
import AppHeaderComponent from '../app-header';
import AppMenuComponent from '../app-menu';
import ProgressBar from '../progress-bar';
import MainRoutesComponent from './routes';

const styles = theme => ({
  container: ({ theme: name }) => ({
    backgroundColor: theme.colors[name].foreground,
    composes: ['is-full-layout', 'flex-rows'],
  }),
  layout: {
    composes: ['flex-columns', 'flex-1', 'no-overflow'],
  },
  views: ({ theme: name }) => ({
    backgroundColor: theme.colors[name].background,
    composes: ['flex-columns', 'no-overflow', 'flex-1'],
  }),
  wrapper: {
    composes: ['is-full-height', 'flex-rows', 'no-overflow'],
  },
});

const MainLayoutComponent = ({ classes, loadFeeds, loading }) => {
  useEffect(() => {
    loadFeeds();
  }, [loadFeeds]);
  return (
    <div className={classes.container} id="app-container">
      <div className={classes.layout} id="app-layout">
        <AppMenuComponent />
        <div className={classes.wrapper} id="app-wrapper">
          <ProgressBar loading={loading} />
          <AppHeaderComponent />
          <div className={classes.views} id="views-container">
            <MainRoutesComponent />
            {/* {draggingcard && <DraggableCard />} */}
          </div>
        </div>
      </div>
      <AppFooterComponent />
    </div>
  );
};

MainLayoutComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  loadFeeds: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default withStyles(styles)(MainLayoutComponent);
