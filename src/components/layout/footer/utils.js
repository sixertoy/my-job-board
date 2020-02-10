import { UIthemes } from '../../../theme';

export const getAvailableThemes = (theme, square) => {
  return Object.keys(UIthemes).reduce((acc, key) => {
    const { background: backgroundColor } = theme.colors[key];
    return { ...acc, [key]: { backgroundColor, ...square } };
  }, {});
};

export default getAvailableThemes;
