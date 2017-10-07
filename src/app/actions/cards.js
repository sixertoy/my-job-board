export const moveCard = (from, to) => ({
  type: 'onMoveCard',
  from,
  to
});

export const endDragging = () => ({
  type: 'onenddragging'
});

export const startDragging = id => ({
  type: 'onstartdragging',
  id
});
