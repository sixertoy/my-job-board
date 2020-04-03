import { EVENT_TYPES, ITEM_TYPES } from '../../constants';

const defaultTodos = {
  ctime: null,
  id: null,
  mtime: null,
  projectid: null,
  tasks: [],
  title: null,
  type: ITEM_TYPES.TODO,
};

const createNewTodos = ({ projectid, title, todosid: id }) => {
  const now = Date.now();
  return {
    ...defaultTodos,
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
