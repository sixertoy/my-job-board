import createCachedSelector from 're-reselect';

import { ITEM_TYPES } from '../../constants';

const getNotes = state => state.todos;
const getProjects = state => state.projects;
const getProjectId = (state, id) => id;

export const selectNotesByProjectId = createCachedSelector(
  getNotes,
  getProjects,
  getProjectId,
  (list, projects, id) => {
    const { notes } = projects.find(obj => obj.id === id);
    if (!notes.length) return [];
    const items = list
      .filter(obj => notes.includes(obj.id))
      .map(obj => ({ ...obj, type: ITEM_TYPES.NOTE }));
    return items;
  }
)((state, id) => `project-todos-${id}`);

export default selectNotesByProjectId;
