const { NODE_ENV } = process.env;

export const CLASS_NAME_PREFIX = 'napper-todolist-';
export const MINIFY = Boolean(
  NODE_ENV !== 'development' && NODE_ENV !== 'local'
);
export const BASE_THEME = {
  borderColor: '#ACE539',
  borderRadius: 4,
  borderSize: 1,
  // buttonHover: '#DCDEE4',
  // cardBackground: '#FFFFFF',
  // cardColor: '#172B4D',
  // columnBackground: '#EBECF0',
  // columnColor: '#172B4D',
};
