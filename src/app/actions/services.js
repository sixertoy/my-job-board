/* eslint
  no-console: 0 */
import { parseString } from 'xml2js';
import * as sortby from 'lodash.sortby';

// application
import { cutwords } from './../utils/cutwords';
import { striptags } from './../utils/striptags';
import { trimstring } from './../utils/trimstring';

const loadingStart = () => ({
  type: 'onloadingstart'
});

const loadingComplete = () => ({
  type: 'onloadingcomplete'
});

const applicationIsLoaded = (feedsitems, lastupdate) => ({
  type: 'onapplicationisloaded',
  feedsitems,
  lastupdate
});

// sucess -> 200, 201
// error -> 404, 403, 400
export const onServiceResponse = (resp) => {
  if (resp.status !== 200 && resp.status !== 201) throw new Error(resp.statusText);
  return resp.text();
};

export const onServiceError = (dispatch, err) => {
  console.log('onServiceError', err);
};

const XMLHeader = new Headers({
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/rss+xml'
});

const corsbridge = 'https://cors-anywhere.herokuapp.com/';
const fetchoptions = { method: 'GET', headers: XMLHeader };
const makePromise = url => fetch(`${corsbridge}${url}`, fetchoptions)
  .then(onServiceResponse)
  .then(body => new Promise(resolve =>
    parseString(body, (err, xml) =>
      resolve((err || !xml.rss) ? false : xml))))
  .catch(onServiceError);

const shortendescription = (description) => {
  let str = trimstring(description);
  str = striptags(str);
  return cutwords(str);
};

const parseResults = bodies => bodies
  .filter(val => val)
  .reduce((acc, body) =>
    acc.concat(body.rss.channel[0].item), [])
  .map(({ title, link, description, pubDate }, index) => ({
    id: index,
    link: link[0],
    title: title[0],
    description: description[0],
    date: Date.parse(pubDate[0]),
    short: shortendescription(description[0])
  }));

export const loadNewJobs = () => (dispatch, getstate) => {
  const { feeds } = getstate();
  dispatch(loadingStart());
  Promise.all(feeds.map(makePromise))
    .then(parseResults)
    .then((items) => {
      const feedsitems = sortby(items, 'date').reverse();
      dispatch(loadingComplete());
      dispatch(applicationIsLoaded(
        feedsitems,
        Date.now()
      ));
    })
    .catch(err => console.log(err));
};
