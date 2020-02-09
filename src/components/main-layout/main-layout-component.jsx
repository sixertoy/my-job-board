import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppHeaderComponent from '../app-header';
import AppMenuComponent from '../app-menu';
import { ViewHomeComponent, ViewKanbanBoardComponent } from '../app-views';
import ProgressBar from '../progress-bar';

const styles = theme => ({
  container: ({ theme: name }) => ({
    backgroundColor: theme.colors[name].dark,
    composes: ['is-full-layout'],
  }),
  layout: {
    composes: ['flex-columns', 'is-full-layout', 'no-overflow'],
  },
  views: {
    composes: ['flex-columns', 'no-overflow'],
  },
  wrapper: {
    composes: ['is-full-height', 'flex-rows', 'no-overflow'],
  },
});

const MainLayoutComponent = ({ classes, loadFeeds, loading }) => {
  useEffect(() => {
    loadFeeds();
  }, [loadFeeds]);
  return (
    <div className={classes.container}>
      <div className={classes.layout} id="app-layout">
        <AppMenuComponent />
        <div className={classes.wrapper} id="app-wrapper">
          <ProgressBar loading={loading} />
          <AppHeaderComponent />
          <div className={classes.views} id="views-container">
            <Switch>
              <Route exact component={ViewHomeComponent} path="/" />
              <Route
                exact
                component={ViewKanbanBoardComponent}
                path="/board/:id?"
              />
            </Switch>
            {/* {draggingcard && <DraggableCard />} */}
          </div>
        </div>
      </div>
    </div>
  );
};

MainLayoutComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  loadFeeds: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default withStyles(styles)(MainLayoutComponent);
