import { connect } from 'react-redux';

import { EVENT_TYPES } from '../../../constants';
import {
  selectNotesByProjectId,
  selectProjectById,
  selectTodosByProjectId,
} from '../../../redux/selectors';
import ProjectComponent from './component';

function sortByMTime(a, b) {
  return a - b;
}

const mapStateToProps = (state, { match }) => {
  const { id } = match.params;
  const project = selectProjectById(state, id);
  const todos = selectTodosByProjectId(state, id);
  const notes = selectNotesByProjectId(state, id);
  const items = [...todos, ...notes];
  items.sort(sortByMTime);
  const { description, title } = project;
  return { description, id, items, title, todos };
};

const mapDispatchToProps = dispatch => ({
  onDelete: id => {
    dispatch({ id, type: EVENT_TYPES.PROJECT_DELETE });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectComponent);
