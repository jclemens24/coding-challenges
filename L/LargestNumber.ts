/**
 * Given an integer n, return the largest number that contains exactly n digits
 *
 * for n = 2, solution(n) = 99
 *
 */

const LargestNumber = function (n: number): number {
  return parseInt('9'.repeat(n), 10);
};

console.log(LargestNumber(2));
console.log(LargestNumber(3));
console.log(LargestNumber(4));

const LargestNumberV2 = function (n: number): number {
  return Math.pow(10, n) - 1;
};

console.log(LargestNumberV2(3));
