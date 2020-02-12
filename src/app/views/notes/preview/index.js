import { connect } from 'react-redux';

import { selectNoteById } from '../../../../redux/selectors';
import PrevienwNoteComponent from './component';

const mapStateToProps = (state, { match }) => {
  const idFromURL = match.params.id;
  const note = selectNoteById(state, idFromURL);
  return { note };
};

const mapDispatchToProps = () => ({
  SAVE_NOTE: () => {},
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrevienwNoteComponent);
