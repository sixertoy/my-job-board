const SPLITTER = '::';

function mapArgsToMemoizeSelector(prefix = '') {
  return (_, ...args) =>
    [prefix, ...args]
      .filter(v => typeof v === 'string')
      .filter(v => v.trim() !== '')
      // .filter(v => v.toString !== undefined)
      .join(SPLITTER);
}

export default mapArgsToMemoizeSelector;
