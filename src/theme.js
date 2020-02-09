const blue = '#2980B9';
const white = '#FFFFFF';
const black = '#000000';
const dark = '#222222';
const gray = '#DDDDDD';
const grey = '#9DA5B4';

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
