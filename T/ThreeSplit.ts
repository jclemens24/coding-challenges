/**
 * You have a long strip of paper with integers written on it in a single line from left to right. You wish to cut the paper into exactly three pieces such that each piece contains at least one integer and the sum of the integers in each piece is the same. You cannot cut through a number, i.e. each initial number will unambiguously belong to one of the pieces after cutting. How many ways can you do it?

It is guaranteed that the sum of all elements in the array is divisible by 3.
 */

function ThreeSplit(a: number[]): number {
  const sum = a.reduce((prev, curr) => prev + curr, 0) / 3;
  let count = 0;
  let total = 0;
  for (let i = 1; i < a.length - 1; i++) {
    a[i] += a[i - 1];
    if (a[i - 1] === sum) count++;
    if (a[i] === sum * 2) total += count;
  }
  return total;
}

console.log(ThreeSplit([0, -1, 0, -1, 0, -1]));
