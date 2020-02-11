const monthsfr = [
  'Janvier',
  'Février',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Août',
  'Septembre',
  'Octobre',
  'Novembre',
  'Décembre',
];

export const humandate = (date = new Date()) => {
  let result = '';
  const year = date.getFullYear();
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month = monthsfr[date.getMonth()];
  result = `${day} ${month} ${year}`;
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const seconds =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
  return `${result} à ${hours}:${minutes}:${seconds}`;
};

export default humandate;
