import get from 'lodash.get';
import createCachedSelector from 're-reselect';

const getOffersFromState = state => state.offers;
const getIdFromProps = (state, id) => id;

const selectOpenedCardById = createCachedSelector(
  getOffersFromState,
  getIdFromProps,
  (offers, id) => {
    const filtered = offers.filter(offer => offer.id === id);
    if (!filtered || !filtered.length) return false;
    return get(filtered, '0');
  }
)((_, id) => id);

export default selectOpenedCardById;
