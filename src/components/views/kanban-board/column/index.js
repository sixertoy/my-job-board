import { connect } from 'react-redux';

import { CARD_STATUS } from '../../../../constants';
import { selectOffersByType } from '../../../../redux/selectors';
import KanbanBoardColumnComponent from './component';

const mapStateToProps = (state, { type }) => {
  const { theme } = state;
  const { key, label: title } = CARD_STATUS[type];
  const offers = selectOffersByType(state, key);
  return { offers, theme, title };
};

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanBoardColumnComponent);
