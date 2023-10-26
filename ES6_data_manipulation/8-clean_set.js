export default function cleanSet(set, startString) {
  const newString = [];

  if (typeof startString !== 'string' || startString.length === 0) return '';

  for (const value of set) {
    if (value && value.startsWith(startString)) newString.push(value.slice(startString.length));
  }

  return newString.join('-');
}
