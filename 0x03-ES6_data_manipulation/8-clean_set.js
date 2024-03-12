export default function (set, startString) {
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  const result = [...set].filter((string) => typeof string === 'string' && string.startsWith(startString));
  return result.map((string) => string.replace(startString, '')).join('-');
}
