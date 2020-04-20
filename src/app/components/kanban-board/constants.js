const { NODE_ENV } = process.env;

export const DRAG_CARD_TYPE = 'card';
export const CLASS_NAME_PREFIX = 'nappr-kanbanboard-';
export const MINIFY = Boolean(
  NODE_ENV !== 'development' && NODE_ENV !== 'local'
);
export const BASE_THEME = {
  buttonColor: '#5E6C84',
  buttonHover: '#DCDEE4',
  cardBackground: '#FFFFFF',
  cardColor: '#172B4D',
  columnBackground: '#EBECF0',
  columnColor: '#172B4D',
};
