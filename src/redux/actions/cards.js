import { CARD_STATUS } from '../../constants';

export const addCardTo = (status, item) => ({
  item,
  status,
  type: 'onaddcardto',
});

export const moveToTrash = item => ({
  item,
  status: CARD_STATUS.TRASHED,
  type: 'onaddcardto',
});

export const endDragging = () => ({
  type: 'onenddragging',
});

export const startDragging = id => ({
  id,
  type: 'onstartdragging',
});
