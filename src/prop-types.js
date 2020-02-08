import { arrayOf, bool, oneOfType, shape, string } from 'prop-types';

function getMessage(propName, componentName) {
  return (
    `Invalid prop \`${propName}\` supplied to` +
    ` \`${componentName}\`. Validation failed.`
  );
}

function timestamp(props, propName, componentName) {
  const value = props[propName];
  const isvalid = typeof value === 'number' && `${value}`.length === 13;
  if (isvalid) return null;
  return new Error(getMessage(propName, componentName));
}

const offer = shape({
  ctime: timestamp,
  date: timestamp,
  description: string,
  id: string,
  link: string,
  mtime: timestamp,
  source: string,
  sourceKey: string,
  status: string,
  title: string,
});
export const OfferType = oneOfType([bool, offer]);

export const OffersType = arrayOf(OfferType);
