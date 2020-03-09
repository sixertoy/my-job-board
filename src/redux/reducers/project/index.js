import { EVENT_TYPES } from '../../../constants';

const defaultState = [];
export const project = (state = defaultState, action) => {
  switch (action.type) {
    case EVENT_TYPES.PROJECT_UPDATE:
      return state;
    default:
      return state;
  }
};

export default project;
