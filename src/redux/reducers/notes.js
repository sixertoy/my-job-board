import { EVENT_TYPES, ITEM_TYPES } from '../../constants';

const defaultNote = {
  content: '',
  ctime: null,
  id: null,
  mtime: null,
  projectid: null,
  title: null,
  type: ITEM_TYPES.TODO,
};

const createNewNote = ({ projectid, title, todosid: id }) => {
  const now = Date.now();
  return {
    ...defaultNote,
    ctime: now,
    id,
    mtime: now,
    projectid,
    title,
  };
};

export const notes = (state = [], action) => {
  switch (action.type) {
    case EVENT_TYPES.TODOS_CREATE:
      return [...state, createNewNote(action)];
    default:
      return state;
  }
};

export default notes;
