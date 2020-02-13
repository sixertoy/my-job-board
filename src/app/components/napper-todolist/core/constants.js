const { NODE_ENV } = process.env;

export const CLASS_NAME_PREFIX = 'napper-todolist-';
export const MINIFY = Boolean(
  NODE_ENV !== 'development' && NODE_ENV !== 'local'
);

export const BASE_THEME = {
  progressRadius: 2,
  progressSize: 5,
};
