/** 
 * Given integers `n, l and r`, find the number of ways to represent n as a sum of two integers A and B such that l ≤ A ≤ B ≤ r.

Example

For `n = 6, l = 2, and r = 4`, the output should be
`solution(n, l, r) = 2.`

There are just two ways to write `6` as `A + B`, where `2 ≤ A ≤ B ≤ 4: 6 = 2 + 4 and 6 = 3 + 3`.
 * 
*/

const CountSumOfTwos = function (
  n: number,
  left: number,
  right: number
): number {
  let count = 0;

  for (let i = left; i <= right; i++) {
    if (i <= n - i && n - i <= right) {
      count++;
    }
  }
  return count;
};

console.log(CountSumOfTwos(6, 2, 4));
console.log(CountSumOfTwos(6, 3, 3));

const CountSumOfTwosV2 = function (n: number, l: number, r: number): number {
  return Math.max(Math.min(Math.floor(n / 2) - l, r - Math.ceil(n / 2)) + 1, 0);
};

console.log(CountSumOfTwosV2(6, 2, 4));
