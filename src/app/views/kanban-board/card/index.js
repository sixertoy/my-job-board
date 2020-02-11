import { connect } from 'react-redux';

// import {
//   addCardTo,
//   endDragging,
//   openOverlayCard,
//   startDragging,
// } from '../../../redux/actions';
import KanbanBoardCardComponent from './component';

const mapStateToProps = null;

const mapDispatchToProps = () => ({
  // addcardto: target => dispatch(addCardTo(target, item)),
  // enddragging: () => dispatch(endDragging()),
  // showfullcard: () => dispatch(openOverlayCard(item)),
  // startdragging: () => dispatch(startDragging(item.id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanBoardCardComponent);
