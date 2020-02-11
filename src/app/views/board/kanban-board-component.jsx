import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';

// import { Route } from 'react-router-dom';
// import { DragDropContext } from 'react-dnd';
// import HTML5Backend from 'react-dnd-html5-backend';
// import { CARD_STATUS } from '../../../constants';
// import KanbanBoardCardPreviewComponent from './card-preview';
// import KanbanBoardColumnComponent from './column';
import KanbanBoard from '../../components/kanban-board';
import BoardHeaderComponent from './header';

const styles = theme => ({
  columns: {
    composes: [
      'flex-1',
      'flex-columns',
      'is-scrollable-x',
      'fancy-scrollbar',
      'pb32',
    ],
  },
  container: {
    composes: ['is-relative', 'flex-rows', 'no-overflow'],
  },
  locker: {
    backgroundColor: `${theme.colors.black}99`,
    composes: ['is-full-layout', 'is-overlay'],
  },
});

const KanbanBoardComponent = ({ classes, columns, offers }) => {
  return (
    <div className={classes.container} id="kanban-board">
      <BoardHeaderComponent />
      <KanbanBoard columns={columns} items={offers} />
      {/* <div className={classes.columns} id="board-columns">
        <KanbanBoardColumnComponent type={CARD_STATUS.FEEDS.key} />
        <KanbanBoardColumnComponent type={CARD_STATUS.TODO.key} />
        <KanbanBoardColumnComponent type={CARD_STATUS.IN_PROGRESS.key} />
        <KanbanBoardColumnComponent type={CARD_STATUS.DONE.key} />
      </div>
      <Route
        exact
        path="/board/:id"
        render={({ match: { params } }) => {
          const { id } = params;
          return (
            <React.Fragment>
              <div className={classes.locker} />
              <KanbanBoardCardPreviewComponent id={id} />
            </React.Fragment>
          );
        }}
      /> */}
    </div>
  );
};

KanbanBoardComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  offers: PropTypes.PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

// export default DragDropContext(HTML5Backend)(
export default withStyles(styles)(KanbanBoardComponent);
