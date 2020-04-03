import { connect } from 'react-redux';

import { EVENT_TYPES } from '../../../constants';
import ProjectsComponent from './component';

const mapStateToProps = (state, { location }) => {
  const { projects } = state;
  const { pathname } = location;
  return { pathname, projects };
};

const mapDispatchToProps = dispatch => ({
  deleteProjectHandler: id => () => {
    dispatch({ id, type: EVENT_TYPES.PROJECT_DELETE });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsComponent);
