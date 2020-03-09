import { EVENT_TYPES } from '../../../constants';

const defaultState = [];

export const projects = (state = defaultState, action) => {
  switch (action.type) {
    case EVENT_TYPES.PROJECT_UPDATE:
      return state;
    default:
      return state;
  }
};

export default projects;
