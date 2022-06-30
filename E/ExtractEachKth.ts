function ExtractFromArr(inputArray: number[], k: number): number[] {
  for (let i = k - 1; i < inputArray.length; i += k - 1) {
    inputArray.splice(i, 1);
  }
  return inputArray;
}

console.log(ExtractFromArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(ExtractFromArr([2, 4, 6, 8, 10], 2));

function ExtractFromArrV2(inputArray: number[], k: number): number[] {
  return inputArray.filter((_, i) => (i + 1) % k);
}

console.log(ExtractFromArrV2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
