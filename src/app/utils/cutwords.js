export const cutwords = (input, signes = 100) => (input.length <= signes ? input
  : `${input.substr(0, signes)}...`);

export default cutwords;
