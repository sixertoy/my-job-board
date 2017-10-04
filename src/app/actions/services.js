/* eslint
  no-console: 0 */
import { parseString } from 'xml2js';
import * as sortby from 'lodash.sortby';


// application
import { shorten } from './../utils/shorten';
import {
  feedsLoaded,
  loadingStart,
  loadingComplete } from './_actions';

const request = require('request-promise-native');

// sucess -> 200, 201
// error -> 404, 403, 400
const onServiceResponse = (resp) => {
  if (resp.status !== 200 && resp.status !== 201) throw new Error(resp.statusText);
  return resp.text();
};

const onServiceError = (dispatch, err) => {
  throw new Error(err);
};

const makeParseFeedsPromise = url => request(`${url}`)
  .then(onServiceResponse)
  .then(body => new Promise(resolve =>
    parseString(body, (err, xml) =>
      resolve((err || !xml.rss) ? false : xml))))
  .catch(onServiceError);

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
    short: shorten(description[0])
  }));

export const loadJobsFeeds = () => (dispatch, getstate) => {
  const { feeds } = getstate();
  dispatch(loadingStart());
  Promise.all(feeds.map(makeParseFeedsPromise))
    .then(parseResults)
    .then((items) => {
      const feedsitems = sortby(items, 'date').reverse();
      dispatch(loadingComplete());
      dispatch(feedsLoaded(feedsitems));
    })
    .catch(err => console.log(err));
};

export default loadJobsFeeds;
