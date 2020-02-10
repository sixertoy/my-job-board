import { connect } from 'react-redux';

import { CARD_STATUS, EVENT_TYPES } from '../../../../constants';
import { selectOpenedCardById } from '../../../../redux/selectors';
import KanbanBoardCardPreviewComponent from './component';

const mapStateToProps = (state, { id }) => {
  const offer = selectOpenedCardById(state, id);
  return { id, offer };
};

const mapDispatchToProps = dispatch => ({
  onChangeStatusHandler: (id, status) => {
    dispatch({ id, status, type: EVENT_TYPES.MOVE_CARD_STATUS });
  },
  onDeleteHandler: id => {
    const status = CARD_STATUS.TRASHED;
    dispatch({ id, status, type: EVENT_TYPES.MOVE_CARD_STATUS });
  },
});

const mergeProps = (
  { id, offer },
  { onChangeStatusHandler, onDeleteHandler }
) => ({
  offer,
  onChangeStatus: status => onChangeStatusHandler(id, status),
  onDelete: () => onDeleteHandler(id),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(KanbanBoardCardPreviewComponent);
