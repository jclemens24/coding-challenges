/**
 * In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

If you can, try writing it in only one line of code.
 */

export function findMultiples(integer: number, limit: number): number[] {
  const multiples: number[] = [];

  for (let i = integer; i <= limit; i += integer) {
    if (i % integer === 0) multiples.push(i);
  }
  return multiples;
}

console.log(findMultiples(5, 25));
console.log(findMultiples(4, 27));

// Functional Approach

export function findMultiplesV2(integer: number, limit: number): number[] {
  return [...Array(limit).keys()]
    .map((key) => key + 1)
    .filter((value) => value % integer === 0);
}

console.log(findMultiplesV2(5, 25));
console.log(findMultiplesV2(4, 27));
