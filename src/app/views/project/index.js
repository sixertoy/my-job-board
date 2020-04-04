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
  onDeleteProject: () => {
    const { id } = match.params;
    dispatch({ id, type: EVENT_TYPES.PROJECT_DELETE });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectComponent);
