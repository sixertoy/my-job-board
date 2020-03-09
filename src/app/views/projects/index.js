import { connect } from 'react-redux';

import { EVENT_TYPES } from '../../../constants';
import ProjectsComponent from './component';

const mapStateToProps = state => ({ projects: state.projects });

const mapDispatchToProps = dispatch => ({
  addProjectHandler: ({ title }) => {
    dispatch({ title, type: EVENT_TYPES.PROJECT_CREATE });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsComponent);
