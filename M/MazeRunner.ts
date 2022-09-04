/* eslint-disable no-unused-vars */
/* eslint-disable no-extend-native */
/**
 *
 */

export function mazeRunner(maze: number[][], directions: string[]): string {
  const start: number[][] = [];
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      if (maze[i][j] === 2) {
        start.push([i, j]);
        break;
      }
    }
  }
  console.log(start);

  let [x, y] = start[0];
  for (const dir of directions) {
    if (dir.charAt(0) === 'N') {
      x -= 1;
    }
    if (dir.charAt(0) === 'S') {
      x += 1;
    }
    if (dir.charAt(0) === 'E') {
      y += 1;
    }
    if (dir.charAt(0) === 'W') {
      y -= 1;
    }
    if (maze[x] === undefined || maze[x][y] === undefined) {
      return 'Dead';
    }
    if (maze[x][y] === 0) {
      continue;
    }
    if (maze[x][y] === 1) {
      return 'Dead';
    }
    if (maze[x][y] === 3) {
      return 'Finish';
    }
  }
  return 'Lost';
}

console.log(
  mazeRunner(
    [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 3],
      [1, 0, 1, 0, 1, 0, 1],
      [0, 0, 1, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 1],
      [1, 2, 1, 0, 1, 0, 1]
    ],
    ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'E', 'E', 'E']
  )
);

// Version 2: Composing with Types

enum MazeLegend {
  Safe = 0,
  Wall = 1,
  Start = 2,
  Finish = 3
}
type Direction = 'N' | 'E' | 'S' | 'W';
type ResultOfMazeRunner = 'Finish' | 'Dead' | 'Lost';
type Maze = MazeLegend[][];
interface Coordinates {
  x: number;
  y: number;
}

const startCoords = (maze: Maze): Coordinates => {
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      if (maze[i][j] === MazeLegend.Start) {
        console.log('i: ', i, 'j: ', j);
        return { x: i, y: j };
      }
    }
  }
  return { x: -1, y: -1 };
};

const setCoords: {
  [K in Direction]: (coordinates: Coordinates) => Coordinates;
} = {
  E: ({ x, y }) => ({ x, y: y + 1 }),
  N: ({ x, y }) => ({ x: x - 1, y }),
  S: ({ x, y }) => ({ x: x + 1, y }),
  W: ({ x, y }) => ({ x, y: y - 1 })
};

export const mazeRunnerV2 = (
  maze: Maze,
  directions: Direction[]
): ResultOfMazeRunner => {
  let coords = startCoords(maze);

  for (const dir of directions) {
    const { x, y } = setCoords[dir](coords);
    console.log(x, y);
    if (maze[x] === undefined) {
      return 'Dead';
    }
    if (maze[x][y] === undefined || maze[x][y] === MazeLegend.Wall) {
      return 'Dead';
    }
    if (maze[x][y] === MazeLegend.Finish) {
      return 'Finish';
    }
    coords = { x, y };
  }
  return 'Lost';
};

console.log(
  mazeRunnerV2(
    [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 3],
      [1, 0, 1, 0, 1, 0, 1],
      [0, 0, 1, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 1],
      [1, 2, 1, 0, 1, 0, 1]
    ],
    ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'E', 'E', 'E']
  )
);
