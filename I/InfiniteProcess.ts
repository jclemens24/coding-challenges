/**
 * Given ints a and b, determine whether the following psuedocode results in an infinite loop
 *
 * ```javascript
 * while a is not equal to b do
 *  increase a by 1
 *  decrease b by 1
 * ```
 *
 * Assume that the program is executed on a virtual machine which can store arbitrary long numbers and execute forever
 */

function IsInfiniteProcess(a: number, b: number): boolean {
  return a > b || (b - a) % 2 !== 0;
}

console.log(IsInfiniteProcess(2, 6));
console.log(IsInfiniteProcess(2, 3));
