export const addCardTo = (status, item) => ({
  type: 'onaddcardto',
  status,
  item
});

export const endDragging = () => ({
  type: 'onenddragging'
});

export const startDragging = id => ({
  type: 'onstartdragging',
  id
});
