import uuidv5 from 'uuid/v5';
import { parseString } from 'xml2js';
import { shorten } from './../utils/shorten';

const XML_HEADER = new Headers({
  // Origin: '*',
  // 'Content-Type': 'application/rss+xml; charset=utf-8',
  // 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6)
  //    AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
  // Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8'
});

const parseresults = (key, xml, ctime) => xml.rss.channel[0].item
  .map(({ title, link, description, pubDate }) => ({
    ctime,
    link: link[0],
    title: title[0],
    description: description[0],
    date: Date.parse(pubDate[0]),
    short: shorten(description[0]),
    id: uuidv5(link[0], uuidv5.URL)
  }));

const resolveFeedRequest = resp => ((resp.status !== 200 && resp.status !== 201)
  ? Promise.resolve(false)
  : resp.text());

const corsproxy = 'https://cors-anywhere.herokuapp.com/';
export default ({
  // sucess -> 200, 201
  // error -> 404, 403, 400
  load: (url, key, ctime) => fetch(`${corsproxy}${url}`, {
    method: 'GET',
    header: XML_HEADER
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
