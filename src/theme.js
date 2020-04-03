const blue = '#2980B9';
const white = '#FFFFFF';
const black = '#282C34';
const dark = '#21252B';
const gray = '#DDDDDD';
const grey = '#9DA5B4';
// const red = '#E06C75';

const themes = {
  day: {
    active: '#6494ED',
    background: '#FEFEFE',
    border: '#E4E6E8',
    button: '#FFFFFF',
    color: '#202124',
    danger: '#DA402B',
    disabled: '#5F6368',
    foreground: '#F5F5F5',
    popup: '#E4E6E8',
  },
  night: {
    active: '#6494ED',
    background: '#282C34',
    border: '#181A1F',
    button: '#181A1F',
    color: '#D7DAE0',
    danger: '#E06C75',
    disabled: '#6B727C',
    foreground: '#21252B',
    popup: '#2F3237',
  },
  trello: {
    active: '#FFFFFF',
    background: '#1E79BF',
    border: '#1868A5',
    button: '#646668',
    color: '#FFFFFF',
    danger: '#E06C75',
    disabled: '#EBECF0',
    foreground: '#1868A5',
    popup: '#1868A5',
  },
};

const themeBase = {
  colors: {
    black,
    blue,
    dark,
    gray,
    grey,
    highlight: '#2C313C',
    scrollbar: '#4B5362',
    shadow: '#3B4048',
    white,
  },
};

export const getThemeByThemeKey = key => {
  const selectedTheme = themes[key];
  const colors = { ...themeBase.colors, ...selectedTheme };
  return { ...themeBase, colors };
};

export const getThemes = () => themes;
