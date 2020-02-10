const blue = '#2980B9';
const white = '#FFFFFF';
const black = '#282C34';
const dark = '#21252B';
const gray = '#DDDDDD';
const grey = '#9DA5B4';
// const red = '#E06C75';

export const UIthemes = {
  day: {
    active: '#6494ED',
    background: '#282C34',
    border: '#181A1F',
    button: '#646668',
    color: '#D7DAE0',
    danger: '#E06C75',
    disabled: '#6B727C',
    foreground: '#21252B',
    highlight: '#2C313C',
    popup: '#2F3237',
    scrollbar: '#4B5362',
    shadow: '#3B4048',
  },
  night: {
    active: '#6494ED',
    background: '#282C34',
    border: '#181A1F',
    button: '#646668',
    color: '#D7DAE0',
    danger: '#E06C75',
    disabled: '#6B727C',
    foreground: '#21252B',
    highlight: '#2C313C',
    popup: '#2F3237',
    scrollbar: '#4B5362',
    shadow: '#3B4048',
  },
};

const theme = {
  colors: {
    black,
    blue,
    dark,
    gray,
    grey,
    white,
    ...UIthemes,
  },
};

export default theme;
