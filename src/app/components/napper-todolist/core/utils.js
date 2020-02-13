export const updatedTask = (tasks, id, checked) => {
  const next = tasks
    .map(obj => (obj.id !== id ? obj : { ...obj, checked }))
    .find(obj => obj.id === id);
  return next;
};

export const filterCompletedTasks = tasks => {
  const next = tasks.filter(obj => !obj.checked);
  return next;
};

export const updateAllTasks = (tasks, task) => {
  const next = tasks.map(obj => (obj.id !== task.id ? obj : task));
  return next;
};

export const toggleAllTasks = (tasks, checked) => {
  const next = tasks.map(obj => ({ ...obj, checked }));
  return next;
};

export const showTopCounter = (position, show) =>
  show && (position === 'top' || position === 'both');

export const showTopProgress = (position, show) =>
  show && (position === 'top' || position === 'both');

export const showBottomCounter = (position, show) =>
  show && (position === 'bottom' || position === 'both');

export const showBottomProgress = (position, show) =>
  show && (position === 'bottom' || position === 'both');
