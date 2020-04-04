import uuidv1 from 'uuid/v1';

import { EVENT_TYPES, ITEM_TYPES } from '../../constants';

const defaultList = {
  ctime: null,
  id: null,
  mtime: null,
  project: null,
  tasks: [],
  title: null,
  type: ITEM_TYPES.LIST,
};

const createNewList = ({ list, project }) => {
  const id = uuidv1();
  const now = Date.now();
  return {
    ...defaultList,
    ...list,
    ctime: now,
    id,
    mtime: now,
    project,
  };
};

export const lists = (state = [], action) => {
  switch (action.type) {
    case EVENT_TYPES.LIST_CREATE:
      return [...state, createNewList(action)];
    case EVENT_TYPES.LIST_DELETE:
      return state;
    default:
      return state;
  }
};

export default lists;
