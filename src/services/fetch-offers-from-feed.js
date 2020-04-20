import get from 'lodash.get';
import uuidv5 from 'uuid/v5';
import { parseStringPromise as xmlToObject } from 'xml2js';

import { CARD_STATUS } from '../constants';

const REQUEST_SUCCESS_STATUS = [200, 201];
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

function resolveFeedRequest(response) {
  const { status } = response;
  // sucess -> 200, 201
  // error -> 404, 403, 400
  const isSuccess = REQUEST_SUCCESS_STATUS.includes(status);
  if (isSuccess) return response.text();
  const err = new Error(`Request failed`);
  return Promise.reject(err);
}

function parseXMLNodeToOffer(sourceKey, source, ctime) {
  return ({
    description: xdescription,
    link: xlink,
    pubDate,
    title: xtitle,
  }) => {
    const mtime = ctime;
    const encoding = uuidv5.URL;
    const link = xlink[0] || xlink;
    const id = uuidv5(link, encoding);
    const status = CARD_STATUS.FEEDS.key;
    const title = (xtitle[0] || xtitle).trim();
    const date = Date.parse(pubDate[0] || pubDate);
    const description = (
      xdescription[0]._ || // NOTE specifique a codeur.com
      xdescription[0] ||
      xdescription
    ).trim();
    return {
      ctime,
      date,
      description,
      id,
      link,
      mtime,
      source,
      sourceKey,
      status,
      title,
    };
  };
}

const fetchOffersFromFeed = (feed, now) => {
  const { key, url } = feed;
  const service = `${CORS_PROXY}${url}`;
  const opts = { header: new Headers({}), method: 'GET' };
  return fetch(service, opts)
    .then(resolveFeedRequest)
    .then(xmlToObject)
    .then(xml => {
      const nodes = get(xml, 'rss.channel.0.item', false);
      const parsed = nodes && nodes.map(parseXMLNodeToOffer(key, url, now));
      if (!parsed) throw new Error('Unable to parse xml to object');
      return parsed;
    })
    .catch(() => {
      // const reason = new Error(`${key}\n${err.message}`);
      // TODO utiliser nappr-core/logger
      // console.log(reason);
    });
};

export default fetchOffersFromFeed;
