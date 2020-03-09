import createCachedSelector from 're-reselect';

const getProjects = state => state.projects;
const getProjectId = (state, id) => id;

export const selectProjectById = createCachedSelector(
  getProjects,
  getProjectId,
  (projects, id) => {
    return projects.find(p => p.id === id);
  }
)((state, id) => `project-${id}`);

export default selectProjectById;
