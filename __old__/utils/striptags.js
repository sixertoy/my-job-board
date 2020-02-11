export const striptags = input => {
  if (!input) return '';
  return input.replace(/<[^>]+>/gi, '');
};

export default striptags;
