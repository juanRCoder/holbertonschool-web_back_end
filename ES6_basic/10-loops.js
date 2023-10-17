export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];  
  for (let value of array) newArr.push(`${appendString}${value}`);

  return newArr;
}
