/**
 * Define an integer's roundness as the number of trailing zeroes in it.

Given an integer n, check if it's possible to increase n's roundness by swapping some pair of its digits.

Example

For n = 902200100, the output should be
solution(n) = true.

One of the possible ways to increase roundness of n is to swap digit 1 with digit 0 preceding it: roundness of 902201000 is 3, and roundness of n is 2.

For instance, one may swap the leftmost 0 with 1.

For n = 11000, the output should be
solution(n) = false.

Roundness of n is 3, and there is no way to increase it.
 */

/* 
This is pretty straighforward. The RegExp will match any zero followed by any number between 1 and 9. So if n = 10100, the RegExp would match "01" which indicates to us that this can be flipped; We use template literal because n is a number (an error that may be more difficult to debug in plain JS) ;)
*/

const IncreaseIntRoundness = function (n: number): boolean {
  return /0[1-9]/.test(`${n}`);
};

console.log(IncreaseIntRoundness(902200100));
console.log(IncreaseIntRoundness(11000));
console.log(IncreaseIntRoundness(888));
