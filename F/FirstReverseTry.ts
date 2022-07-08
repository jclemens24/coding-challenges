/**
 * Reversing an array can be a tough task, especially for a novice programmer. Mary just started coding, so she would like to start with something basic at first. Instead of reversing the array entirely, she wants to swap just its first and last elements.

Given an array arr, swap its first and last elements and return the resulting array.
 */

const FirstReverse = function (arr: number[]): number[] {
  if (arr.length === 0) {
    return arr;
  } else if (arr.length <= 2) {
    return arr.reverse();
  } else {
    const first = arr.shift();
    const last = arr.pop();

    if (first && last) {
      return [last, ...arr, first];
    }
    return arr;
  }
};

console.log(FirstReverse([1, 2, 3, 4, 5]));
console.log(FirstReverse([]));
console.log(FirstReverse([239]));
console.log(FirstReverse([23, 54, 12, 3, 4, 56, 23, 12, 5, 324]));
console.log(FirstReverse([-1, 1]));

/**
 * I submitted the first solution. However, after returning to this file, there is a much easier way to solve this problem. Please note the use of the Non-null Assertion Operator (!). Array.pop and Array.shift may return undefined
 */

const FirstReverseV2 = function (arr: number[]): number[] {
  return arr.length > 1 ? [arr.pop()!, ...arr.slice(1), arr.shift()!] : arr;
};

console.log(FirstReverseV2([1, 2, 3, 4, 5]));
console.log(FirstReverseV2([]));
console.log(FirstReverseV2([239]));
console.log(FirstReverseV2([23, 54, 12, 3, 4, 56, 23, 12, 5, 324]));
