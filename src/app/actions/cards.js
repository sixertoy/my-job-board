export const addCardTo = (target, item) => ({
  type: 'onaddcardto',
  target,
  item
});

export const removeCardFrom = (source, { id }) => ({
  type: 'onremovecardfrom',
  source,
  id
});

export const endDragging = () => ({
  type: 'onenddragging'
});

export const startDragging = id => ({
  type: 'onstartdragging',
  id
});
