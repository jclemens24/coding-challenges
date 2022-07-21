/**
 * A noob programmer was given two simple tasks: sum and sort the elements of the given array
a = [a1, a2, ..., an]. He started with summing and did it easily, but decided to store the sum he found in some random position of the original array which was a bad idea. Now he needs to cope with the second task, sorting the original array a, and it's giving him trouble since he modified it.

Given the array shuffled, consisting of elements a1, a2, ..., an, a1 + a2 + ... + an in random order, return the sorted array of original elements a1, a2, ..., an.
 */

function ShuffledArray(shuffled: number[]): number[] {
  const reduced = shuffled.reduce((prev, curr) => prev + curr, 0) / 2;
  shuffled.splice(shuffled.indexOf(reduced), 1);
  return shuffled.sort((a, b) => a - b);
}

console.log(ShuffledArray([1, 12, 3, 6, 2]));
