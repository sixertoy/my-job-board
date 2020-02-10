import orderBy from 'lodash.orderby';

import { CARD_STATUS } from '../../../../constants';

export const getCardStatusSelectValues = () => {
  let values = Object.entries(CARD_STATUS);
  values = values.map(arr => arr[1]);
  values = values.filter(({ priority }) => priority >= 0);
  values = orderBy(values, ['priority'], 'asc');
  return values;
};

export default getCardStatusSelectValues;
