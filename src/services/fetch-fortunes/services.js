import get from 'lodash.get';

const services = [
  {
    id: 'funfact',
    parser: payload => {
      if (!payload) return '';
      return get(payload, 'text', '');
    },
    url: 'https://uselessfacts.jsph.pl/random.json?language=en',
  },
  {
    id: 'geek',
    parser: payload => {
      return payload || '';
    },
    type: 'text',
    url: 'https://geek-jokes.sameerkumar.website/api',
  },
  {
    id: 'tips',
    parser: payload => {
      const len = payload.length;
      const rand = Math.floor(Math.random() * len);
      return get(payload, rand);
    },
    url:
      'https://raw.githubusercontent.com/nirajpandkar/git-tip/master/tips.json',
  },
  {
    id: 'kanye',
    parser: payload => {
      if (!payload) return '';
      return get(payload, 'quote');
    },
    url: 'https://api.kanye.rest',
  },
  {
    id: 'trbmb',
    parser: payload => {
      if (!payload) return '';
      return get(payload, '0');
    },
    url: 'https://api.chew.pro/trbmb',
  },
  {
    id: 'opinion',
    parser: payload => {
      const data = get(payload, 'quotes.0', false);
      return (data && `${data.quote} - ${data.author}`) || '';
    },
    url: 'https://opinionated-quotes-api.gigalixirapp.com/v1/quotes',
  },
  {
    id: 'isthisforthat',
    parser: payload => {
      if (!payload) return '';
      return `So, basically, it's like a ${payload.this} for ${payload.that}`;
    },
    url: 'http://itsthisforthat.com/api.php?json',
  },
  {
    id: 'trump',
    parser: payload => {
      if (!payload) return '';
      const len = payload.messages.non_personalized.length;
      const rand = Math.floor(Math.random() * len);
      return get(payload, `messages.non_personalized.${rand}`);
    },
    url: 'https://api.whatdoestrumpthink.com/api/v1/quotes',
  },
  {
    id: 'cookies',
    parser: payload => {
      const numbers = get(payload, '0.lotto.numbers');
      const message = get(payload, '0.fortune.message');
      return { message, numbers };
    },
    url: 'http://fortunecookieapi.herokuapp.com/v1/cookie',
  },
  // {
  //   id: 'poem',
  //   parser: payload => {
  //     if (!payload) return false;
  //     const len = payload.length;
  //     const rand = Math.floor(Math.random() * len);
  //     const poem = get(payload, rand);
  //     return poem;
  //   },
  //   url: 'https://www.poemist.com/api/v1/randompoems',
  // },
];

export default services;
