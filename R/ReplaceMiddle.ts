/**
 * We define the middle of the array arr as follows:

if arr contains an odd number of elements, its middle is the element whose index number is the same when counting from the beginning of the array and from its end;
if arr contains an even number of elements, its middle is the sum of the two elements whose index numbers when counting from the beginning and from the end of the array differ by one.
Given array arr, your task is to find its middle, and, if it consists of two elements, replace those elements with the value of middle. Return the resulting array as the answer
 */

const ReplaceMiddle = function (arr: number[]): number[] {
  if (arr.length % 2) {
    return arr;
  } else {
    const middle = arr
      .splice(arr.length / 2 - 1, 2)
      .reduce((acc, curr) => acc + curr, 0);
    return arr
      .slice(0, arr.length / 2)
      .concat(middle, arr.slice(arr.length / 2));
  }
};

console.log(ReplaceMiddle([7, 2, 2, 5, 10, 7]));
console.log(ReplaceMiddle([-5, -5, 10]));
console.log(ReplaceMiddle([45, 23, 12, 33, 12, 453, -234, -45]));

/**
 * Perhaps a better version would not have mutated the original array so early. Array.splice() allows you to insert items as the n + 2 arg
 *
 */

const ReplaceMiddleV2 = function (arr: number[]): number[] {
  if (arr.length % 2 === 0) {
    const middleIndex = arr.length / 2 - 1;
    const sum = arr[middleIndex] + arr[middleIndex + 1];
    arr.splice(middleIndex, 2, sum);
  }
  return arr;
};

console.log(ReplaceMiddleV2([7, 2, 2, 5, 10, 7]));
console.log(ReplaceMiddleV2([-5, -5, 10]));
console.log(ReplaceMiddleV2([45, 23, 12, 33, 12, 453, -234, -45]));
