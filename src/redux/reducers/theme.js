import { EVENT_TYPES } from '../../constants';

const defaultState = 'day';
export const selectedTheme = (state = defaultState, action) => {
  switch (action.type) {
    case EVENT_TYPES.THEME_CHANGE:
      return action.name;
    default:
      return state;
  }
};

export default selectedTheme;
