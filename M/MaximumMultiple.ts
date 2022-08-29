/**
 * Task
Given a Divisor and a Bound , Find the largest integer N , Such That ,

Conditions :
N is divisible by divisor

N is less than or equal to bound

N is greater than 0.

Notes
The parameters (divisor, bound) passed to the function are only positive values .

 */

export function maxMultiple(divisor: number, bound: number): number {
  const closestInt = Math.floor(bound / divisor);
  return divisor * closestInt;
}

console.log(maxMultiple(2, 7));
console.log(maxMultiple(3, 10));
console.log(maxMultiple(7, 17));
console.log(maxMultiple(10, 50));
console.log(maxMultiple(37, 200));
console.log(maxMultiple(7, 100));

/* 
Another way to look at this is to take bound and subtract it from the result of bound % divisor => bound - remainder
*/

type Int = number & { __int__: void };

const roundToInt = (num: number): Int => Math.round(num) as Int;

export function maxMultipleV2(divisor: number, bound: number): number {
  return roundToInt(bound - (bound % divisor));
}

console.log(maxMultipleV2(2, 7));
console.log(maxMultipleV2(3, 10));
console.log(maxMultipleV2(7, 17));
console.log(maxMultipleV2(10, 50));
console.log(maxMultipleV2(37, 200));
console.log(maxMultipleV2(7, 100));
