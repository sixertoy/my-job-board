export const theme = {
  card: {
    background: '#FFFFFF',
    color: '#172b4d',
  },
  column: {
    background: '#EBECF0',
    color: '#172b4d',
  },
  scrollbar: {
    thumb: '#C5C9D1',
    track: '#DCDEE4',
  },
  shadow: '0 1px 0 rgba(9, 30, 66, 0.25)',
};

export const stylesheet = {
  customScrollbar: (size = 8) => ({
    '&::-webkit-scrollbar': {
      borderRadius: '4px',
      height: `${size}px`,
      width: `${size}px`,
    },
    '&::-webkit-scrollbar-thumb': {
      background: theme.scrollbar.thumb,
      borderRadius: '4px',
    },
    '&::-webkit-scrollbar-track': {
      background: theme.scrollbar.track,
      borderRadius: '4px',
    },
    '&::-webkit-scrollbar-track-piece': {
      background: theme.scrollbar.track,
      borderRadius: '4px',
    },
  }),
  isFullHeight: {
    height: '100%',
    maxHeight: '100%',
    minHeight: '100%',
  },
  isFullWidth: {
    maxWidth: '100%',
    minWidth: '100%',
    width: '100%',
  },
  isScrollableX: {
    overflowX: 'scroll',
    overflowY: 'hidden',
  },
  isScrollableY: {
    overflowX: 'hidden',
    overflowY: 'scroll',
  },
};
