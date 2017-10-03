const monthsfr = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

export const humandate = (date = new Date()) => {
  try {
    return date.toLocaleString();
  } catch (err) {
    let result = '';
    const year = date.getFullYear();
    const day = date.getDate() < 10
      ? `0${date.getDate()}`
      : date.getDate();
    const month = monthsfr[date.getMonth()];
    result = `${year} ${month} ${day}`;
    const hours = date.getHours() < 10
      ? `0${date.getHours()}`
      : date.getHours();
    const minutes = date.getMinutes() < 10
      ? `0${date.getMinutes()}`
      : date.getMinutes();
    const seconds = date.getSeconds() < 10
      ? `0${date.getSeconds()}`
      : date.getSeconds();
    return `${result} ${hours}:${minutes}:${seconds}`;
  }
};

export default humandate;
