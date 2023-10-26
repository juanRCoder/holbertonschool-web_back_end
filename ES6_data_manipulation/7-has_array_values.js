export default function hasValuesFromArray(set, arr) {
  return arr.every((x) => set.has(x));
}
