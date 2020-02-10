import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';

// import { DragDropContext } from 'react-dnd';
// import HTML5Backend from 'react-dnd-html5-backend';
import { CARD_STATUS } from '../../../constants';
import KanbanBoardCardPreviewComponent from './card-preview';
import KanbanBoardColumnComponent from './column';
import KanbanBoardHeaderComponent from './header';

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
  locker: ({ theme: name }) => {
    const backgroundColor = `${theme.colors[name].black}99`;
    return {
      backgroundColor,
      composes: ['is-full-layout', 'is-overlay'],
    };
  },
});

const KanbanBoardComponent = ({ classes }) => {
  return (
    <div className={classes.container} id="kanban-board">
      <KanbanBoardHeaderComponent />
      <div className={classes.columns} id="board-columns">
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
              <KanbanBoardCardPreviewComponent id={id} />
            </React.Fragment>
          );
        }}
      />
    </div>
  );
};

KanbanBoardComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
};

// export default DragDropContext(HTML5Backend)(
export default withStyles(styles)(KanbanBoardComponent);
