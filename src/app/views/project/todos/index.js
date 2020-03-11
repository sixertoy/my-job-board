import { connect } from 'react-redux';
import uuidv1 from 'uuid/v1';

import { EVENT_TYPES } from '../../../../constants';
import { selectTodosByProjectId } from '../../../../redux/selectors';
import TodoGridComponent from './component';

const mapStateToProps = (state, { match }) => {
  const { id } = match.params;
  const items = selectTodosByProjectId(state, id);
  return { items };
};

const mapDispatchToProps = (dispatch, { match }) => ({
  createTodosHandler: ({ title }) => {
    const todosid = uuidv1();
    const { id: projectid } = match.params;
    dispatch({ projectid, title, todosid, type: EVENT_TYPES.TODOS_CREATE });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoGridComponent);
