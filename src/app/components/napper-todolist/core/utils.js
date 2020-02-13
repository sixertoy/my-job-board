export const moveCompletedToBottom = tasks => {
  const checked = tasks.filter(obj => obj.checked);
  const unchecked = tasks.filter(obj => !obj.checked);
  return [...unchecked, ...checked];
};

export const orderTasksBy = (orderBy, order) => tasks => {
  const clone = [...tasks];
  clone.sort((a, b) => {
    let akey = a[orderBy];
    let bkey = b[orderBy];
    // TODO prendre en charge les différents types...
    if (!akey || !bkey) return 0;
    akey = akey.toString().toLocaleLowerCase();
    bkey = bkey.toString().toLocaleLowerCase();
    if (akey > bkey) return 1;
    if (akey < bkey) return -1;
    return 0;
  });
  if (order === 'desc') clone.reverse();
  return clone;
};

export const filterCompletedTasks = tasks => {
  const next = tasks.filter(obj => !obj.checked);
  return next;
};

export const checkAllAreCompleted = tasks => {
  const checked = tasks.filter(obj => obj.checked);
  const allChecked = checked.length >= tasks.length;
  return allChecked;
};

export const showTopCounter = (position, show) =>
  show && (position === 'top' || position === 'both');

export const showTopProgress = (position, show) =>
  show && (position === 'top' || position === 'both');

export const showBottomCounter = (position, show) =>
  show && (position === 'bottom' || position === 'both');

export const showBottomProgress = (position, show) =>
  show && (position === 'bottom' || position === 'both');
