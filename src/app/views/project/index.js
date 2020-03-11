import { connect } from 'react-redux';

import { EVENT_TYPES } from '../../../constants';
import { selectProjectById } from '../../../redux/selectors';
import ProjectComponent from './component';

const mapStateToProps = (state, { match }) => {
  const { id } = match.params;
  const data = selectProjectById(state, id);
  return { data };
};

const mapDispatchToProps = dispatch => ({
  onDelete: id => {
    dispatch({ id, type: EVENT_TYPES.PROJECT_DELETE });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectComponent);
