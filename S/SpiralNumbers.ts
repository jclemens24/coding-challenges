/**
 * Spiral Numbers
 *
 * Construct A square matrix with a size N * N containing ints from 1 to N * N in a spiral order, start from top-left and in clockwise direction.
 *
 * For n = 3, solution(n) = [[1,2,3], [8,9,4], [7,6,5]]
 *
 * @param {number} n The number to square
 * @returns {number[][]} A matrix that is filled in a spiral shape
 */

const SpiralNumbers = function (n: number): number[][] {
  const matrix: number[][] = [...Array(n)].map((_) => Array(n));
  console.log(matrix);
  let x: number = 0;
  let y: number = 0;
  let direction = 2;
  let matrixSize = n;
  let cell = 0;

  for (let i = 1; i <= n ** 2; i++) {
    matrix[y][x] = i;

    if (++cell === matrixSize) {
      console.log(`Controller: `, cell);
      direction = (direction + 1) % 4;
      console.log('Direction: %d', direction);
      matrixSize -= direction % 2;
      cell = 0;
    }

    if (direction % 2 === 0) {
      x += direction > 1 ? 1 : -1;
    } else {
      y += direction > 1 ? 1 : -1;
    }
  }

  console.log(matrix);
  return matrix;
};

SpiralNumbers(3);
