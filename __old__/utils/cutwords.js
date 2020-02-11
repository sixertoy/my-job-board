export const cutwords = (input, limit = 100) =>
  input.length <= limit ? input : `${input.substr(0, limit)}...`;

export default cutwords;
