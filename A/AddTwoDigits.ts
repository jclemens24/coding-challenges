/**
 * Add Two Digits. You are given a two-digit integer n. Return the sum of its digits
 *
 */

const SumOfTwoDigits = function (n: number): number {
  return n
    .toString(10)
    .split('')
    .reduce((acc, curr) => acc + parseInt(curr, 10), 0);
};

console.log(SumOfTwoDigits(29));
console.log(SumOfTwoDigits(48));

const SumOfTwoDigitsV2 = function (n: number): number {
  return (n % 10) + Math.floor(n / 10);
};

console.log(SumOfTwoDigitsV2(35));
