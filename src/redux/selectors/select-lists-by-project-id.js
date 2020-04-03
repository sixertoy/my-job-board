import createCachedSelector from 're-reselect';

const getLists = state => state.lists;
const getProjectId = (state, id) => id;

export const selectListsByProjectId = createCachedSelector(
  getLists,
  getProjectId,
  (alls, projectid) => {
    const items = alls
      .filter(obj => obj.project === projectid)
      .map(obj => ({ ...obj }));
    return items || [];
  }
)((state, projectid) => `project-notes-${projectid}`);

export default selectListsByProjectId;
