export const striptags = (input) => {
  if (!input) return '';
  return input.replace(/<[^>]+>/ig, '');
};

export default striptags;
