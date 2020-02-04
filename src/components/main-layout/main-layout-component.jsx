import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';

import ProgressBar from '../ui/progress-bar';
import AppHeaderComponent from './appheader';
import AppMenuComponent from './appmenu';
// import KanbanBoard from './kanban/kanban-board';
//
const styles = {
  board: {
    composes: ['flex-columns'],
  },
  container: {
    composes: ['is-full-layout'],
  },
  layout: {
    composes: ['is-full-height', 'flex-columns'],
  },
  wrapper: {
    composes: ['is-full-height', 'flex-rows'],
  },
};

const MainLayoutComponent = ({ classes, loading }) => (
  <div className={classes.container}>
    <div className={classes.layout}>
      <AppMenuComponent />
      <div className={classes.wrapper}>
        <ProgressBar loading={loading} />
        <AppHeaderComponent />
        {/* {openedcard && <OverlayCard />} */}
        <div className={classes.board}>
          {/* {draggingcard && <DraggableCard />} */}
        </div>
      </div>
    </div>
  </div>
);

MainLayoutComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  loading: PropTypes.bool.isRequired,
};

export default withStyles(styles)(MainLayoutComponent);
