import { connect } from 'react-redux';

import { selectOpenedCardById } from '../../../redux/selectors';
import KanbanBoardCardPreview from './component';

const mapStateToProps = (state, { id }) => {
  const offer = selectOpenedCardById(state, id);
  return { offer };
};

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanBoardCardPreview);
