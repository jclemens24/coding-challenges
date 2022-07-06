/**
 * Imagine a white rectangular grid of n rows and m columns divided into two parts by a diagonal line running from the upper left to the lower right corner. Now let's paint the grid in two colors according to the following rules:

A cell is painted black if it has at least one point in common with the diagonal;
Otherwise, a cell is painted white.
Count the number of cells painted black.
 */

const CountBlackCells = function (n: number, m: number): number {
  const denominator = (a: number, b: number): number => {
    console.log('a: ', a);
    console.log('b: ', b);
    return b === 0 ? a : denominator(b, a % b);
  };
  return n + m + denominator(n, m) - 2;
};

console.log(CountBlackCells(3, 4));
console.log(CountBlackCells(3, 3));
console.log(CountBlackCells(2, 5));
