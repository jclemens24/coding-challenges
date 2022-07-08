/**
 * Remove a part of a given array between given 0-based indexes l and r (inclusive).
 *
 * In this situation, Array.splice() is the easier method IMO because it directly mutates the array it runs on whereas Array.slice() returns a copy but does not mutate the original array. However, we can accomplish the same thing using Array.slice() if you look at the second function. Lastly we can use the Array.filter() method to evaluate if the index is less then `l` but greater than `r`. That solution I did not think of myself but rather a friend made me aware of.
 */

const SpliceArray = function (
  inputArray: number[],
  l: number,
  r: number
): number[] {
  inputArray.splice(l, r - l + 1);
  return inputArray;
};

console.log(SpliceArray([2, 3, 2, 3, 4, 5], 2, 4));
console.log(SpliceArray([2, 4, 10, 1], 0, 2));
console.log(SpliceArray([0, -2, 5, 6], 3, 3));

const RemoveArrayPart = function (
  inputArray: number[],
  l: number,
  r: number
): number[] {
  return inputArray.slice(0, l).concat(inputArray.slice(r + 1));
};

console.log(RemoveArrayPart([2, 3, 2, 3, 4, 5], 2, 4));
console.log(RemoveArrayPart([2, 4, 10, 1], 0, 2));
console.log(RemoveArrayPart([0, -2, 5, 6], 3, 3));

const RemoveArrayPartV2 = function (
  inputArray: number[],
  l: number,
  r: number
): number[] {
  return inputArray.filter((_, i) => i < l || i > r);
};

console.log(RemoveArrayPartV2([2, 3, 2, 3, 4, 5], 2, 4));
console.log(RemoveArrayPartV2([2, 4, 10, 1], 0, 2));
console.log(RemoveArrayPartV2([0, -2, 5, 6], 3, 3));
