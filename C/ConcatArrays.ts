/**
 * Given two arrays of integers a and b, obtain the array formed by the elements of a followed by the elements of b.
 *
 * These solutions are pretty straight forward. Spread operator (...) unpacks each value inside the array.
 */

const ConcatArray = function (a: number[], b: number[]): number[] {
  return [...a, ...b];
};

console.log(ConcatArray([2, 2, 1], [10, 11]));

const ConcatArrayV2 = function (a: number[], b: number[]): number[] {
  return a.concat(b);
};

console.log(ConcatArrayV2([2, 2, 1], [10, 11]));
