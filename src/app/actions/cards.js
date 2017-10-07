export const addCardTo = (target, obj) => ({
  type: 'onaddcardto',
  target,
  obj
});

export const removeCardFrom = (source, id) => ({
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
