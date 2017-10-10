export const selectedcard = (state = false, action) => {
  switch (action.type) {
  case 'onopenoverlaycard':
    return action.item;
  case 'oncloseoverlaycard':
    return false;
  default:
    return state;
  }
};

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

export const draggingcardid = (state = false, action) => {
  switch (action.type) {
  case 'onenddragging':
    return false;
  case 'onstartdragging':
    return action.id;
  default:
    return state;
  }
};
