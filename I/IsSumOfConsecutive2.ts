/**
 *Find the number of ways to express n as sum of some (at least two) consecutive positive integers. The idea is to represent `n` as a sequence of its length. I start this loop at 3 and hardcode it just because it's the sum of the first 2 consecutive numbers 1 + 2. That will ensure any value passed to the function will return 0 as there is no possible way to represent a sum of consecutive numbers.

There are probably a couple of ways to do this but I'll admit, this is the only way I could think of.
 */

function isSumOf2(n: number): number {
  let count = 0;
  for (let i = 3; i <= n; i += 2) {
    if (n % i === 0) count++;
  }
  return count;
}

console.log(isSumOf2(9));
console.log(isSumOf2(8));
console.log(isSumOf2(10));
console.log(isSumOf2(99));
console.log(isSumOf2(3));
