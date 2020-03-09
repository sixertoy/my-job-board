import createCachedSelector from 're-reselect';

const getSomething = () => {};

export const selector = createCachedSelector(getSomething, something => {
  return {};
})((state, dates) => dates);

export default selector;
