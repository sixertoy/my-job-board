const blue = '#2980B9';
const white = '#FFFFFF';
const black = '#000000';
const dark = '#222222';
const gray = '#DDDDDD';
const grey = '#9DA5B4';

export const UIthemes = {
  day: {
    active: blue,
    background: white,
    color: black,
  },
  night: {
    active: blue,
    background: black,
    color: white,
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
