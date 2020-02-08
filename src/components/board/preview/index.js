import { connect } from 'react-redux';

import KanbanBoardCardPreview from './component';

const mapStateToProps = (state, { id }) => {
  const item = null;
  return { item };
};

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanBoardCardPreview);
