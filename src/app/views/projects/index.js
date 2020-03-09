import { connect } from 'react-redux';

import { EVENT_TYPES } from '../../../constants';
import ProjectsComponent from './component';

const mapStateToProps = (state, { location }) => {
  const { projects } = state;
  const { pathname } = location;
  return { pathname, projects };
};

const mapDispatchToProps = dispatch => ({
  addProjectHandler: ({ project: data }) => {
    dispatch({ data, type: EVENT_TYPES.PROJECT_CREATE });
  },
  deleteProjectHandler: id => {
    dispatch({ id, type: EVENT_TYPES.PROJECT_DELETE });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsComponent);
