import uuidv1 from 'uuid/v1';

import { EVENT_TYPES } from '../../constants';

const defaultProject = {
  ctime: null,
  description: null,
  id: null,
  mtime: null,
  notes: [],
  title: null,
  // liste d'ids des todos
  todos: [],
};

const updateProjectTodos = (project, { todosid }) => {
  return { ...project, todos: [...project.todos, todosid] };
};

const createNewProject = ({ description, title }) => {
  const id = uuidv1();
  const ctime = Date.now();
  return {
    ...defaultProject,
    ctime,
    description,
    id,
    mtime: ctime,
    title,
  };
};

export const projects = (state = [], action) => {
  switch (action.type) {
    case EVENT_TYPES.TODOS_CREATE:
      return state.map(obj => {
        const shouldUpdateProjectTodos = action.projectid === obj.id;
        if (!shouldUpdateProjectTodos) return obj;
        return updateProjectTodos(obj, action);
      });
    case EVENT_TYPES.PROJECT_CREATE:
      return [...state, createNewProject(action.project)];
    case EVENT_TYPES.PROJECT_DELETE:
      return state.filter(obj => obj.id !== action.id);
    case EVENT_TYPES.PROJECT_UPDATE:
      return state;
    default:
      return state;
  }
};

export default projects;
