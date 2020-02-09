import { connect } from 'react-redux';

import { selectOpenedCardById } from '../../../../redux/selectors';
import KanbanBoardCardPreviewComponent from './component';

const mapStateToProps = (state, { id }) => {
  const { theme } = state;
  const offer = selectOpenedCardById(state, id);
  return { offer, theme };
};

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanBoardCardPreviewComponent);
