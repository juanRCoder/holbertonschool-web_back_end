export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}

// export default function concatArrays(array1, array2, string) {
//   let arr = array1.concat(array2);
//   let str = Array.from(string);
//   return arr.concat(str);
//   }
