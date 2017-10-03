/* eslint
  no-console: 0 */
import { parseString } from 'xml2js';
import * as sortby from 'lodash.sortby';

const loadingStart = () => ({
  type: 'onloadingstart'
});

const loadingComplete = () => ({
  type: 'onloadingcomplete'
});

const applicationIsReady = items => ({
  type: 'onapplicationready',
  items
});

// sucess -> 200, 201
// error -> 404, 403, 400
export const onServiceResponse = (resp) => {
  if (resp.status !== 200 && resp.status !== 201) throw new Error(resp.statusText);
  return resp.text();
};

/*
export const onServiceError = (dispatch, err) => {
  dispatch(loadingComplete());
  console.log(err);
};
*/

const XMLHeader = new Headers({
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/rss+xml'
});

const corsbridge = 'https://cors-anywhere.herokuapp.com/';
const fetchoptions = { method: 'GET', headers: XMLHeader };
const makePromise = url => fetch(`${corsbridge}${url}`, fetchoptions)
  .then(onServiceResponse)
  .then(body => new Promise(resolve =>
    parseString(body, (err, xml) => resolve(xml))));

const parseResults = bodies =>
  bodies.reduce((acc, body) =>
    acc.concat(body.rss.channel[0].item), [])
    .map(obj => ({
      link: obj.link[0],
      title: obj.title[0],
      description: obj.description[0],
      date: Date.parse(obj.pubDate[0])
    }));

export const loadNewJobs = () => (dispatch, getstate) => {
  const { feeds } = getstate();
  dispatch(loadingStart());
  Promise.all(feeds.map(makePromise))
    .then(parseResults)
    .then((items) => {
      const feedsitems = sortby(items, 'date').reverse();
      dispatch(loadingComplete());
      dispatch(applicationIsReady(feedsitems));
    })
    .catch(err => console.log(err));
};
