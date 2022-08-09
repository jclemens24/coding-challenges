/**
 * This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
 */

export function simpleMultiplication(num: number): number {
  if (num % 2) return num * 9;
  else return num * 8;
}
