export const findUpdatedTask = (tasks, id) => {
  const task = tasks.find(obj => obj.id === id);
  return task;
};

export const mapUpdatedTaskToTasksList = updated => {
  return obj => {
    if (obj.id !== updated.id) return { ...obj };
    return updated;
  };
};

export const getOnChangeHandler = tasks => (id, checked) => {
  const task = findUpdatedTask(tasks, id);
  const updated = { ...task, checked };
  const updatedTasksList = tasks.map(mapUpdatedTaskToTasksList(updated));
  return { updated, updatedTasksList };
};
