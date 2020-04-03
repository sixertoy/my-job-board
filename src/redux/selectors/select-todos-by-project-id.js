import createCachedSelector from 're-reselect';

import { ITEM_TYPES } from '../../constants';

const getTodos = state => state.todos;
const getProjects = state => state.projects;
const getProjectId = (state, id) => id;

export const selectTodosByProjectId = createCachedSelector(
  getTodos,
  getProjects,
  getProjectId,
  (list, projects, id) => {
    const { todos } = projects.find(obj => obj.id === id);
    if (!todos.length) return [];
    const items = list
      .filter(obj => todos.includes(obj.id))
      .map(obj => ({ ...obj, type: ITEM_TYPES.TODO }));
    return items;
  }
)((state, id) => `project-todos-${id}`);

export default selectTodosByProjectId;
