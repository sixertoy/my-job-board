import { CARD_STATUS } from './../../constants';

export const addCardTo = (status, item) => ({
  type: 'onaddcardto',
  status,
  item
});

export const moveToTrash = item => ({
  status: CARD_STATUS.TRASHED,
  type: 'onaddcardto',
  item
});

export const endDragging = () => ({
  type: 'onenddragging'
});

export const startDragging = id => ({
  type: 'onstartdragging',
  id
});
