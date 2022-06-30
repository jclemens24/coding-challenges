/** 
 * Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid contains all of the digits from 1 to 9.

  This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.
 * 
  Each "House" in Sudoku (3 * 3 block) has 362,880 possible solutions
*/

const Sudoku = function (grid: number[][]): boolean {
  const BLOCK_PRODUCT_MAX = 362_880;

  const subset = (row: number[]): boolean =>
    row.reduce((acc, curr) => acc * curr, 1) === BLOCK_PRODUCT_MAX;

  return grid.every((row, i) => {
    return (
      subset(row) &&
      subset(grid.map((r) => r[i])) &&
      subset(
        row.map(
          (_, idx) =>
            grid[3 * ((i / 3) | 0) + ((idx / 3) | 0)][3 * (i % 3) + (idx % 3)]
        )
      )
    );
  });
};

console.log(
  Sudoku([
    [1, 3, 2, 5, 4, 6, 9, 2, 7],
    [4, 6, 5, 8, 7, 9, 3, 8, 1],
    [7, 9, 8, 2, 1, 3, 6, 5, 4],
    [9, 2, 1, 4, 3, 5, 8, 7, 6],
    [3, 5, 4, 7, 6, 8, 2, 1, 9],
    [6, 8, 7, 1, 9, 2, 5, 4, 3],
    [5, 7, 6, 9, 8, 1, 4, 3, 2],
    [2, 4, 3, 6, 5, 7, 1, 9, 8],
    [8, 1, 9, 3, 2, 4, 7, 6, 5]
  ])
);
