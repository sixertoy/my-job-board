import { EVENT_TYPES } from '../../constants';

const defaultTodoList = {
  ctime: null,
  id: null,
  mtime: null,
  projectid: null,
  tasks: [],
  title: null,
};

const createNewTodos = ({ projectid, title, todosid: id }) => {
  const now = Date.now();
  return {
    ...defaultTodoList,
    ctime: now,
    id,
    mtime: now,
    projectid,
    title,
  };
};

export const todos = (state = [], action) => {
  switch (action.type) {
    case EVENT_TYPES.TODOS_CREATE:
      return [...state, createNewTodos(action)];
    case EVENT_TYPES.TODOS_DELETE:
      return state;
    default:
      return state;
  }
};

export default todos;
