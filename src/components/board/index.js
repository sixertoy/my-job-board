import { connect } from 'react-redux';

import KanbanBoardComponent from './kanban-board-component';

const mapStateToProps = () => {
  console.log('render render render ');
  return {};
};

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanBoardComponent);
