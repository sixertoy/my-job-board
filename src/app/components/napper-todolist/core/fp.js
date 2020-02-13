export const noop = v => v;

// TODO polyfill reduce/reduceRight
export const pipe = (...funcs) => args =>
  funcs.reduce((arg, fn) => fn(arg), args);

export const compose = (...funcs) => args =>
  funcs.reduceRight((acc, fn) => fn(acc), args);
