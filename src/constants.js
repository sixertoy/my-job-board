// update chaque heure (secondes, (minutes, heure), millisecondes)
export const UPDATE_INTERVAL_MS = (60 * (60 * 0.05) * 1000);

export const XML_HEADER = new Headers({
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/rss+xml'
});
