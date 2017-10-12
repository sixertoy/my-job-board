export const openedcard = (state = false, action) => {
  switch (action.type) {
  case 'onopenoverlaycard':
    return action.item;
  case 'oncloseoverlaycard':
    return false;
  default:
    return state;
  }
};

export const draggingcard = (state = false, action) => {
  switch (action.type) {
  case 'onenddragging':
    return false;
  case 'onstartdragging':
    return action.id;
  default:
    return state;
  }
};
