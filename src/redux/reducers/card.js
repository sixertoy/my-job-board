import { EVENT_TYPES } from '../../constants';

export const openedCard = (state = false, action) => {
  switch (action.type) {
    case EVENT_TYPES.CARD_OPEN:
      return action.id;
    case EVENT_TYPES.CARD_CLOSE:
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
