import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';

// import { DragDropContext } from 'react-dnd';
// import HTML5Backend from 'react-dnd-html5-backend';
import KanbanBoardColumnComponent from './column';

const styles = {
  container: {
    composes: ['is-full-layout', 'no-overflow', 'flex-columns'],
  },
};

const KanbanBoardComponent = ({ classes }) => {
  return (
    <div className={classes.container}>
      <KanbanBoardColumnComponent title="Feeds" />
      <KanbanBoardColumnComponent title="Todo" />
      <KanbanBoardColumnComponent title="In Progress" />
      <KanbanBoardColumnComponent title="Done" />
    </div>
  );
};

KanbanBoardComponent.defaultProps = {};

KanbanBoardComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
};

// export default DragDropContext(HTML5Backend)(
export default withStyles(styles)(KanbanBoardComponent);
