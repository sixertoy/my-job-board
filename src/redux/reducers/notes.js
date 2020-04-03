import uuidv1 from 'uuid/v1';

import { EVENT_TYPES, ITEM_TYPES } from '../../constants';

const defaultNote = {
  content: '',
  ctime: null,
  id: null,
  mtime: null,
  project: null,
  title: null,
  type: ITEM_TYPES.NOTE,
};

const createNewNote = ({ project }) => {
  const id = uuidv1();
  const now = Date.now();
  const title = 'My note';
  return {
    ...defaultNote,
    ctime: now,
    id,
    mtime: now,
    project,
    title,
  };
};

export const notes = (state = [], action) => {
  switch (action.type) {
    case EVENT_TYPES.NOTE_CREATE:
      return [...state, createNewNote(action)];
    default:
      return state;
  }
};

export default notes;
