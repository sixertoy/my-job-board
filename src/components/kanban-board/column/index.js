import { connect } from 'react-redux';

import KanbanBoardColumnComponent from './component';

const mapStateToProps = state => {
  const { offers } = state;
  return { offers };
};

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanBoardColumnComponent);
