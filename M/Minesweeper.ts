/**
 * In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.
 *
 * @param matrix - a matrix of boolean values where true represents a mine and false means no mine in that position
 * @returns a matrix of ints equal to the number of mines in the neighboring cells
 */

function Minesweeper(matrix: boolean[][]): number[][] {
  const matrixArea: number[][] = [
    [0, 1],
    [0, -1],
    [1, 0],
    [1, -1],
    [1, 1],
    [-1, 0],
    [-1, 1],
    [-1, -1]
  ];

  return matrix.map((row, i) => {
    console.log(`row: ${row}, i: ${i}`);
    return row.map((_, j) => {
      console.log(`j: ${j}`);
      return matrixArea.reduce((acc, val) => {
        console.log(`acc: ${acc}, val: ${val}`);
        return (acc += !(matrix[i + val[0]] && matrix[i + val[0]][j + val[1]])
          ? 0
          : 1);
      }, 0);
    });
  });
}

console.log(
  Minesweeper([
    [true, false, false],
    [false, true, false],
    [false, false, false]
  ])
);

function MinesweeperV2(matrix: boolean[][]): number[][] {
  const board: number[][] = [];

  for (let y = 0; y < matrix.length; y++) {
    board.push([]);

    for (let x = 0; x < matrix[y].length; x++) {
      board[y][x] = 0;

      // Above
      if (matrix[y][x - 1] !== undefined) {
        if (matrix[y][x - 1] === true) {
          board[y][x]++;
        }
      }
      // Below
      if (matrix[y][x + 1] !== undefined) {
        if (matrix[y][x + 1] === true) {
          board[y][x]++;
        }
      }
      // Left
      if (matrix[y - 1] !== undefined) {
        if (matrix[y - 1][x] === true) {
          board[y][x]++;
        }
      }
      // Right
      if (matrix[y + 1] !== undefined) {
        if (matrix[y + 1][x] === true) {
          board[y][x]++;
        }
      }
      // Down Right
      if (matrix[y + 1] !== undefined) {
        if (matrix[y + 1][x + 1] === true) {
          board[y][x]++;
        }
      }
      // Down Left
      if (matrix[y + 1] !== undefined) {
        if (matrix[y + 1][x - 1] === true) {
          board[y][x]++;
        }
      }
      // Top Right
      if (matrix[y - 1] !== undefined) {
        if (matrix[y - 1][x + 1] === true) {
          board[y][x]++;
        }
      }
      // Top Left
      if (matrix[y - 1] !== undefined) {
        if (matrix[y - 1][x - 1] === true) {
          board[y][x]++;
        }
      }
    }
  }

  return board;
}

console.log(
  MinesweeperV2([
    [true, false, false],
    [false, true, false],
    [false, false, false]
  ])
);
