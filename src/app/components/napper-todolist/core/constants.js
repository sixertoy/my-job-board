const { NODE_ENV } = process.env;

export const CLASS_NAME_PREFIX = 'napper-todolist-';
export const MINIFY = Boolean(
  NODE_ENV !== 'development' && NODE_ENV !== 'local'
);

export const BASE_THEME = {
  backgroundHover: 'rgba(0, 0, 0, 0.15)',
  color: '#000000',
  progressRadius: 2,
  progressSize: 5,
  taskRadius: 4,
  titleFontSize: 20,
};
