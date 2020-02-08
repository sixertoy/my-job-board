import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';
import { IoIosRefresh } from 'react-icons/io';
import { Route } from 'react-router-dom';

// import { DragDropContext } from 'react-dnd';
// import HTML5Backend from 'react-dnd-html5-backend';
import { CARD_STATUS } from '../../constants';
import KanbanBoardColumnComponent from './column';
import KanbanBoardPreviewComponent from './preview';

const styles = theme => ({
  columns: {
    composes: ['flex-1', 'flex-columns'],
  },
  container: {
    composes: ['is-relative', 'flex-rows'],
  },
  header: {
    composes: ['flex-0'],
  },
  locker: () => {
    const backgroundColor = `${theme.colors.black}99`;
    return {
      backgroundColor,
      composes: ['is-full-layout', 'is-overlay'],
    };
  },
  refresh: {
    color: theme.colors.white,
    composes: ['fs24'],
  },
});

const KanbanBoardComponent = ({ classes, forceRefresh, nextUpdate }) => {
  return (
    <div className={classes.container} id="kanban-board">
      <div className={classes.header}>
        <b>Next Update</b>
        <span style={{ marginLeft: '5px' }}>
          {!nextUpdate ? '' : new Date(nextUpdate).toLocaleString()}
        </span>
        <button
          className={classes.refresh}
          type="button"
          onClick={forceRefresh}>
          <span>Force Refresh</span>
          <IoIosRefresh />
        </button>
      </div>
      <div className={classes.columns}>
        <KanbanBoardColumnComponent type={CARD_STATUS.FEEDS} />
        <KanbanBoardColumnComponent type={CARD_STATUS.TODO} />
        <KanbanBoardColumnComponent type={CARD_STATUS.IN_PROGRESS} />
        <KanbanBoardColumnComponent type={CARD_STATUS.DONE} />
      </div>
      <Route
        exact
        path="/board/:id"
        render={({ match: { params } }) => {
          const { id } = params;
          return (
            <React.Fragment>
              <div className={classes.locker} />
              <KanbanBoardPreviewComponent id={id} />
            </React.Fragment>
          );
        }}
      />
    </div>
  );
};

KanbanBoardComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  forceRefresh: PropTypes.func.isRequired,
  nextUpdate: PropTypes.number.isRequired,
};

// export default DragDropContext(HTML5Backend)(
export default withStyles(styles)(KanbanBoardComponent);
