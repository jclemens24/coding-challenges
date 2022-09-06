/**
 * Introduction and Warm-up (Highly recommended)
Playing With Lists/Arrays Series
Task
Given an array/list [] of integers , Find the product of the k maximal numbers.

Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives , negatives and zeros

Repetition of numbers in the array/list could occur.
 */

export function maxProduct(numbers: number[], size: number): number {
  const maxNums: number[] = [];

  for (let i = 0; i < size; i++) {
    const max = Math.max(...numbers);
    maxNums.push(max);
    numbers.splice(numbers.indexOf(max), 1);
  }
  return maxNums.reduce((acc, curr) => acc * curr, 1);
}

console.log(maxProduct([4, 3, 5], 2));
console.log(maxProduct([10, 8, 7, 9], 3));

export function maxProductV2(numbers: Array<number>, size: number): number {
  return numbers
    .sort((a, b) => b - a)
    .slice(0, size)
    .reduce((acc, curr) => acc * curr, 1);
}

console.log(maxProductV2([4, 3, 5], 2));
console.log(maxProductV2([10, 8, 7, 9], 3));
