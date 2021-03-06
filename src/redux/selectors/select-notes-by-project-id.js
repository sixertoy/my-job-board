import createCachedSelector from 're-reselect';

const getNotes = state => state.notes;
const getProjectId = (state, id) => id;

export const selectNotesByProjectId = createCachedSelector(
  getNotes,
  getProjectId,
  (alls, projectid) => {
    const items = alls
      .filter(obj => obj.project === projectid)
      .map(obj => ({ ...obj }));
    return items || [];
  }
)((state, projectid) => `project-notes-${projectid}`);

export default selectNotesByProjectId;
