export const trimstring = input => input.trim()
  .split('&nbsp;')
  .join(' ')
  .split(' ')
  .filter(val => val)
  .join(' ');

export default trimstring;
