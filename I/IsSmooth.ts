/** 
 * We define the middle of the array arr as follows:

if arr contains an odd number of elements, its middle is the element whose index number is the same when counting from the beginning of the array and from its end;
if arr contains an even number of elements, its middle is the sum of the two elements whose index numbers when counting from the beginning and from the end of the array differ by one.
An array is called smooth if its first and its last elements are equal to one another and to the middle. Given an array arr, determine if it is smooth or not.
*/

function isSmooth(arr: number[]): boolean {
  if (arr.length % 2) {
    // This branch is for odd length arrays (only exec when !== 0)
    const middle = arr.at(Math.floor(arr.length / 2))!;
    return arr[0] === middle && middle === arr[arr.length - 1];
  } else {
    // This is even length arrays
    const [a, b] = [arr[arr.length / 2 - 1], arr[arr.length / 2]];
    return a + b === arr[0] && a + b === arr[arr.length - 1];
  }
}

console.log(isSmooth([7, 2, 2, 5, 10, 7]));
console.log(isSmooth([-5, -5, 10]));

/**
 * There is another similar method that uses Bitwise right shift operator. Shifting a number to the right e.g.(6 >> 1) cuts that number in half. So (6 >> 1) is 3.
 *
 * `6 (base 10) = 00000000000000000000000000000110 (base 2)`
 *
 * `6 >> 1 ==== > 00000000000000000000000000000011 (base 2)`
 */

function isSmoothV2(arr: number[]): boolean {
  const middle =
    arr.length % 2 === 0
      ? arr[arr.length / 2 - 1] + arr[arr.length / 2]
      : arr[arr.length >> 1];
  return arr[0] === middle && arr[arr.length - 1] === middle;
}

console.log(isSmoothV2([7, 2, 2, 5, 10, 7]));
console.log(isSmoothV2([-5, -5, 10]));
