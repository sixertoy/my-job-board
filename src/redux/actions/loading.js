import { EVENT_TYPES } from '../../constants';

export const loadingStart = () => ({
  type: EVENT_TYPES.LOADING_START,
});

export const loadingComplete = () => ({
  type: EVENT_TYPES.LOADING_COMPLETE,
});
