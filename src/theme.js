const blue = '#2980B9';
const white = '#FFFFFF';
const black = '#0A0B0B';
const dark = '#44404A';
const gray = '#DDDDDD';
const grey = '#9DA5B4';
// const hover = '#36353A';

export const UIthemes = {
  day: {
    active: blue,
    background: gray,
    color: dark,
  },
  night: {
    active: blue,
    background: dark,
    color: gray,
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
