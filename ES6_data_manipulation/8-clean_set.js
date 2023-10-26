export default function cleanSet(set, startString) {
  const newString = [];
  for (const value of set) {
    if (startString.length === 0) break;
    if (value.startsWith(startString)) newString.push(value.slice(startString.length));
  }
  return newString.join('-');
}
