import { EVENT_TYPES } from '../../constants';

const defaultState = false;
export const fortune = (state = defaultState, action) => {
  switch (action.type) {
    case EVENT_TYPES.FORTUNE_COOKIES_LOADED:
      return action.data;
    default:
      return state;
  }
};

export default fortune;
