/**
 *Let's call two integers A and B friends if each integer from the array divisors is either a divisor of both A and B or neither A nor B. If two integers are friends, they are said to be in the same clan. How many clans are the integers from 1 to k, inclusive, broken into?

Example

For divisors = [2, 3] and k = 6, the output should be
solution(divisors, k) = 4.

The numbers 1 and 5 are friends and form a clan, 2 and 4 are friends and form a clan, and 3 and 6 do not have friends and each is a clan by itself. So the numbers 1 through 6 are broken into 4 clans.

 */

const NumOfClansOG = (divisors: number[], k: number): number => {
  return new Set(
    [...Array(k).keys()].map(
      (key) => `${divisors.map((num) => !((key + 1) % num))}`
    )
  ).size;
};

console.log(NumOfClansOG([2, 3], 6));

const NumberOfClans = (divisors: number[], k: number): number => {
  return new Set(
    [...Array(k).keys()].map((key) =>
      divisors.filter((num) => (key + 1) % num === 0).toString()
    )
  ).size;
};

console.log(NumberOfClans([2, 3], 6));
console.log(NumberOfClans([2, 3, 4], 6));
