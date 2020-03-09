import { connect } from 'react-redux';

import { selectProjectById } from '../../../redux/selectors';
import ProjectComponent from './component';

const mapStateToProps = (state, { match }) => {
  const { id } = match.params;
  const data = selectProjectById(state, id);
  return { data };
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(ProjectComponent);
