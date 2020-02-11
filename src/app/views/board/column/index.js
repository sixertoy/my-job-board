import { connect } from 'react-redux';

import { CARD_STATUS } from '../../../../constants';
import { selectOffersByType } from '../../../../redux/selectors';
import KanbanBoardColumnComponent from './component';

const mapStateToProps = (state, { type }) => {
  const { key, label: title } = CARD_STATUS[type];
  const offers = selectOffersByType(state, key);
  return { offers, title };
};

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanBoardColumnComponent);
