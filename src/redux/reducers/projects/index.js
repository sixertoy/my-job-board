import uuidv1 from 'uuid/v1';

import { EVENT_TYPES } from '../../../constants';

const defaultState = [];

const createNewProject = () => {
  const id = uuidv1();
  const ctime = Date.now();
  const title = 'Lorem ipsum dolor sit amet';
  const description = 'Lorem ipsum dolor sit amet';
  return { ctime, description, id, mtime: ctime, notes: [], title, todos: [] };
};

export const projects = (state = defaultState, action) => {
  switch (action.type) {
    case EVENT_TYPES.PROJECT_CREATE:
      return [...state, createNewProject()];
    case EVENT_TYPES.PROJECT_UPDATE:
      return state;
    default:
      return state;
  }
};

export default projects;
