import { withStyles } from '@iziges/napper-react';
import PropTypes from 'prop-types';
import React from 'react';

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

const KanbanBoardComponent = ({
  classes,
  columns,
  moveCardToStatus,
  offers,
}) => {
  return (
    <div className={classes.container} id="kanban-board">
      <BoardHeaderComponent />
      <KanbanBoard
        columns={columns}
        items={offers}
        onCardDropped={moveCardToStatus}
      />
      {/*
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
  moveCardToStatus: PropTypes.func.isRequired,
  offers: PropTypes.PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

// export default DragDropContext(HTML5Backend)(
export default withStyles(styles)(KanbanBoardComponent);
