/**
 * Given a divisor and a bound, find the largest integer N such that:
 *
 * N is divisible by divisor
 * N is less than or equal to bound
 * N is greater than 0
 *
 * It is guarenteed that such a number exists
 *
 * Ex: divisor = 3, bound = 10, the output should be solution(divisor, bound) = 9
 */

function MaxMultiple(divisor: number, bound: number): number {
  return Math.floor(bound / divisor) * divisor;
}

console.log(MaxMultiple(3, 10));
console.log(MaxMultiple(2, 7));
