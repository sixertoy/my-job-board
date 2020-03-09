import uuidv1 from 'uuid/v1';

import { EVENT_TYPES } from '../../../constants';

const defaultState = [];

const createNewProject = ({ desciption, title }) => {
  const id = uuidv1();
  const ctime = Date.now();
  return {
    ctime,
    desciption,
    id,
    mtime: ctime,
    notes: [],
    title,
    todos: [],
  };
};

export const projects = (state = defaultState, action) => {
  switch (action.type) {
    case EVENT_TYPES.PROJECT_CREATE:
      return [...state, createNewProject(action.data)];
    case EVENT_TYPES.PROJECT_DELETE:
      return state.filter(obj => obj.id !== action.id);
    case EVENT_TYPES.PROJECT_UPDATE:
      return state;
    default:
      return state;
  }
};

export default projects;
