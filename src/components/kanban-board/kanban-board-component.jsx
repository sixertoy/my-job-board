import { withStyles } from '@iziges/napper-core-react';
import PropTypes from 'prop-types';
import React from 'react';

// import { DragDropContext } from 'react-dnd';
// import HTML5Backend from 'react-dnd-html5-backend';
import { CARD_STATUS } from '../../constants';
import KanbanBoardColumnComponent from './column';

const styles = {
  container: {
    composes: ['is-full-layout', 'flex-columns'],
  },
};

const KanbanBoardComponent = ({ classes }) => {
  return (
    <div className={classes.container}>
      <KanbanBoardColumnComponent type={CARD_STATUS.FEEDS} />
      <KanbanBoardColumnComponent type={CARD_STATUS.TODO} />
      <KanbanBoardColumnComponent type={CARD_STATUS.IN_PROGRESS} />
      <KanbanBoardColumnComponent type={CARD_STATUS.DONE} />
    </div>
  );
};

KanbanBoardComponent.defaultProps = {};

KanbanBoardComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
};

// export default DragDropContext(HTML5Backend)(
export default withStyles(styles)(KanbanBoardComponent);
