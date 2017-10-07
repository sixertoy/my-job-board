export const isdragging = (state = false, action) => {
  switch (action.type) {
  case 'onenddragging':
    return false;
  case 'onstartdragging':
    return true;
  default:
    return state;
  }
};

export const draggingcarid = (state = false, action) => {
  switch (action.type) {
  case 'onenddragging':
    return false;
  case 'onstartdragging':
    return action.id;
  default:
    return state;
  }
};
