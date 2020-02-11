import { shape, string } from 'prop-types';

export const ItemType = shape({
  description: string,
  id: string.isRequired,
  title: string,
});

export const ColumnType = shape({
  key: string.isRequired,
  label: string.isRequired,
});
