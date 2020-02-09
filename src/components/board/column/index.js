import { connect } from 'react-redux';

import { CARD_STATUS } from '../../../constants';
import { selectOffersByType } from '../../../redux/selectors';
import KanbanBoardColumnComponent from './component';

function getTitleByType(type) {
  switch (type) {
    case CARD_STATUS.FEEDS:
      return 'Feeds';
    case CARD_STATUS.TODO:
      return 'Todo';
    case CARD_STATUS.DONE:
      return 'Done';
    default:
    case CARD_STATUS.IN_PROGRESS:
      return 'In Progress';
  }
}

const mapStateToProps = (state, { type }) => {
  const title = getTitleByType(type);
  const offers = selectOffersByType(state, type);
  return { offers, title };
};

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanBoardColumnComponent);