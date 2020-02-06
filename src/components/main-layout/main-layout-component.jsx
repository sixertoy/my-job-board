import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppHeaderComponent from '../appheader';
import AppMenuComponent from '../appmenu';
import KanbanBoardComponent from '../kanban-board';
import ProgressBar from '../progress-bar';

const styles = theme => ({
  container: {
    backgroundColor: theme.colors.dark,
    composes: ['is-full-layout', 'no-overflow'],
  },
  layout: {
    composes: ['is-full-height', 'flex-columns'],
  },
  views: {
    composes: ['flex-columns', 'no-overflow'],
  },
  wrapper: {
    composes: ['is-full-height', 'flex-rows'],
  },
});

const MainLayoutComponent = ({ classes, loadFeeds, loading }) => {
  useEffect(() => {
    loadFeeds();
  }, [loadFeeds]);
  return (
    <div className={classes.container}>
      <div className={classes.layout}>
        <AppMenuComponent />
        <div className={classes.wrapper}>
          <ProgressBar loading={loading} />
          <AppHeaderComponent />
          {/* {openedcard && <OverlayCard />} */}
          <div className={classes.views}>
            <Switch>
              <Route path="/">
                <KanbanBoardComponent />
              </Route>
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
