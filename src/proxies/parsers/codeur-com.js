function parse() {
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
    const status = CARD_STATUS.FEEDS;
    const title = (xtitle[0] || xtitle).trim();
    const date = Date.parse(pubDate[0] || pubDate);
    const description = (xdescription[0] || xdescription).trim();
    return {
      ctime,
      date,
      description,
      id,
      link,
      mtime,
      source,
      status,
      title,
    };
  };
}

export default parse;
