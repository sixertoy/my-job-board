import uuidv5 from 'uuid/v5';
import { parseString } from 'xml2js';

// application
import { CARD_STATUS } from './../../constants';
// utils
import { cleanstr } from './../utils/cleanstr';

const parseresults = (key, xml, ctime) => xml.rss.channel[0].item
  .map(({ title, link, description, pubDate, guid }) => {
    const uuid = (typeof guid[0] === 'string')
      ? uuidv5(guid[0], uuidv5.URL) // remixjobs
      : guid[0]._; // indeed
    return ({
      ctime,
      mtime: ctime,
      id: uuid,
      source: key,
      link: link[0],
      title: cleanstr(title[0]),
      status: CARD_STATUS.DEFAULT,
      date: Date.parse(pubDate[0]),
      description: cleanstr(description[0])
    });
  });

const resolveFeedRequest = resp => ((resp.status !== 200 && resp.status !== 201)
  ? Promise.resolve(false)
  : resp.text());

const corsproxy = 'https://cors-anywhere.herokuapp.com/';
export default ({
  // sucess -> 200, 201
  // error -> 404, 403, 400
  load: (url, key, ctime) => fetch(`${corsproxy}${url}`, {
    method: 'GET',
    header: new Headers({})
  })
    .then(resolveFeedRequest)
    .then((body) => {
      if (!body) return Promise.resolve(false);
      return new Promise(resolve => parseString(body, (err, xml) =>
        ((err || !xml.rss)
          ? resolve(false)
          : resolve(parseresults(key, xml, ctime)))));
    })
    .catch(err => console.log('err', err))
});
