const blue = '#2980B9';
const white = '#FFFFFF';
const black = '#282C34';
const dark = '#21252B';
const gray = '#DDDDDD';
const grey = '#9DA5B4';
// const red = '#E06C75';

export const UIthemes = {
  day: {
    active: '#5BB895',
    background: '#FEFEFE',
    border: '#E4E6E8',
    button: '#FFFFFF',
    color: '#202124',
    danger: '#DA402B',
    disabled: '#5F6368',
    foreground: '#F5F5F5',
    // highlight: '#2C313C',
    popup: '#E4E6E8',
    // scrollbar: '#C9C9C9',
    // shadow: '#F3F5F5',
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
    // highlight: '#2C313C',
    popup: '#2F3237',
    // scrollbar: '#4B5362',
    // shadow: '#3B4048',
  },
  social: {
    active: '#4267B2',
    background: '#F5F6F7',
    border: '#DDDFE2',
    button: '#FFFFFF',
    color: '#4B4F56',
    danger: '#DA402B',
    disabled: '#90949C',
    foreground: '#E9EBEE',
    // highlight: '#2C313C',
    popup: '#DDDFE2',
    // scrollbar: '#C9C9C9',
    // shadow: '#F3F5F5',
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
    // highlight: '#2C313C',
    popup: '#1868A5',
    // scrollbar: '#4B5362',
    // shadow: '#3B4048',
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
