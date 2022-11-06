/**
 * DESCRIPTION:
Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

Assume that the input n will always be a positive integer.

Examples: (Input --> output)

2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
 */

export const sumCubes = (n: number): number => {
  const nums = Array.from({ length: n }, (_, k) => k + 1);
  return nums.reduce((acc, curr) => acc + Math.pow(curr, 3), 0);
};

console.log(sumCubes(2));
console.log(sumCubes(3));
