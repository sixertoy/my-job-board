const { NODE_ENV } = process.env;

export const isProduction = () => NODE_ENV !== 'development';

export const isDevelopment = () => NODE_ENV === 'development';
