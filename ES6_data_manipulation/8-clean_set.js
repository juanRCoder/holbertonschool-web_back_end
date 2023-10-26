function cleanSet(set, startString) {
  const newString = [];
  if (startString.length == 0) return '';
  for (const value of set) {
    if (value.startsWith(startString)) newString.push(value.slice(startString.length));
  };
  return newString.join('-');
}
export default cleanSet;
