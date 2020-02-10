const blue = '#2980B9';
const white = '#D7DAE0';
const black = '#282C34';
const dark = '#21252B';
const gray = '#DDDDDD';
const grey = '#9DA5B4';
// const hover = '#36353A';

export const UIthemes = {
  day: {
    active: blue,
    background: gray,
    color: dark,
    foreground: dark,
  },
  night: {
    active: '#6494ED',
    background: '#282C34',
    border: '#181A1F',
    color: '#D7DAE0',
    disabled: '#6B727C',
    foreground: '#21252B',
    highlight: '#2C313C',
    scrollbar: '#4B5362',
    shadow: '#3B4048',
  },
  nnight: {
    active: blue,
    background: gray,
    color: dark,
    foreground: dark,
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
