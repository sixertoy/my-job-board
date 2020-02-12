import { EVENT_TYPES } from '../../constants';

const defaultState = [];
export const notes = (state = defaultState, action) => {
  switch (action.type) {
    case EVENT_TYPES.SAVE_NOTE:
      return action.data;
    default:
      return state;
  }
};

export default notes;
