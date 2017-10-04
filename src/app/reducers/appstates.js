import find from 'lodash.find';

export const isloaded = (state = false, action) => {
  switch (action.type) {
  case 'applicationloaded':
    return true;
  default:
    return state;
  }
};

export const feeds = (state = [
  // FIXME ->
  // au lieu d'un tableau faire un object
  // les cles seront le nom de la source d'ou proviennent les feeds
  'http://remixjobs.com/rss',
  'http://www.indeed.fr/rss?q=%28javascript%29&l=Montpellier'
], action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export const feedsitems = (state = [], action) => {
  switch (action.type) {
  case 'onMoveCard':
    // find(state, { id: action.from });
    return state.reverse();
  case 'onapplicationready':
    return action.items;
  default:
    return state;
  }
};