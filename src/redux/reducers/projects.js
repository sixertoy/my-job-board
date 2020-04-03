import uuidv1 from 'uuid/v1';

import { EVENT_TYPES } from '../../constants';

const defaultProject = {
  color: '#000000',
  ctime: null,
  description: null,
  id: null,
  lists: [],
  mtime: null,
  notes: [],
  permalink: null,
  title: null,
};

// const updateProjectLists = (project, { listid }) => {
//   return { ...project, lists: [...project.lists, listid] };
// };

const createNewProject = ({ description, title }) => {
  const id = uuidv1();
  const ctime = Date.now();
  return {
    ...defaultProject,
    ctime,
    description,
    id,
    mtime: ctime,
    permalink: `/projects/${id}`,
    title,
  };
};

export const projects = (state = [], action) => {
  switch (action.type) {
    // case EVENT_TYPES.LIST_CREATE:
    //   return state.map(obj => {
    //     const shouldUpdateProjectTodos = action.projectid === obj.id;
    //     if (!shouldUpdateProjectTodos) return obj;
    //     return updateProjectLists(obj, action);
    //   });
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
