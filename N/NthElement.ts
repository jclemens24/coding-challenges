/**
 * This kata is from check py.checkio.org

You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

Let's look at a few examples:

array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.
 */

export function index(array: number[], n: number): number {
  return Math.pow(array[n], 2);
}

export function gooseFilter(birds: string[]): string[] {
  const geese: string[] = [
    'African',
    'Roman Tufted',
    'Toulouse',
    'Pilgrim',
    'Steinbacher'
  ];

  return birds.filter((bird) => !geese.includes(bird));
  // return an array containing all of the strings in the input array except those that match strings in geese
}

export function position(alphabet: string): string {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  const position = alpha.indexOf(alphabet) + 1;
  return `Position of alphabet: ${position}`;
}
