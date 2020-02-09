import { EVENT_TYPES } from '../../constants';

const defaultState = 'day';
export const theme = (state = defaultState, action) => {
  switch (action.type) {
    case EVENT_TYPES.ON_THEME_CHANGE:
      return action.name;
    default:
      return state;
  }
};

export default theme;
