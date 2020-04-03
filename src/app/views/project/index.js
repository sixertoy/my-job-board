import { connect } from 'react-redux';

import { EVENT_TYPES } from '../../../constants';
import {
  selectListsByProjectId,
  selectNotesByProjectId,
  selectProjectById,
} from '../../../redux/selectors';
import ProjectComponent from './component';

function sortByMTime(a, b) {
  return a - b;
}

const mapStateToProps = (state, { match }) => {
  const { id } = match.params;
  const project = selectProjectById(state, id);
  const lists = selectListsByProjectId(state, id);
  const notes = selectNotesByProjectId(state, id);
  const items = [...lists, ...notes];
  items.sort(sortByMTime);
  const { description, title } = project;
  return { description, id, items, title };
};

const mapDispatchToProps = (dispatch, { match }) => ({
  onCreateList: () => {
    const { id: project } = match.params;
    dispatch({ project, type: EVENT_TYPES.LIST_CREATE });
  },
  onCreateNote: () => {
    const { id: project } = match.params;
    dispatch({ project, type: EVENT_TYPES.NOTE_CREATE });
  },
  onDeleteProject: () => {
    const { id } = match.params;
    dispatch({ id, type: EVENT_TYPES.PROJECT_DELETE });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectComponent);
