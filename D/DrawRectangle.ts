/**
 * You are implementing a command-line version of the Paint app. Since the command line doesn't support colors, you are using different characters to represent pixels. Your current goal is to support `rectangle x1 y1 x2 y2` operation, which draws a rectangle that has an upper left corner at `(x1, y1)` and a lower right corner at `(x2, y2)`. Here the x-axis points from left to right, and the y-axis points from top to bottom.

Given the initial canvas state and the array that represents the coordinates of the two corners, return the canvas state after the operation is applied. For the details about how rectangles are painted, see the example.

Example

```canvas = [['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
          ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
          ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
          ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
          ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']]```

  and `rectangle = [1, 1, 4, 3]`, the output should be

```[['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
   ['a', '*', '-', '-', '*', 'a', 'a', 'a'],
   ['a', '|', 'a', 'a', '|', 'a', 'a', 'a'],
   ['b', '*', '-', '-', '*', 'b', 'b', 'b'],
   ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']]```
 */

const DrawRectangle = (canvas: string[][], rectangle: number[]): string[][] => {
  const leftCoords = rectangle.slice(0, rectangle.length / 2);
  const rightCoords = rectangle.slice(rectangle.length / 2);

  canvas[leftCoords[1]][leftCoords[0]] = '*';
  canvas[rightCoords[1]][rightCoords[0]] = '*';
  canvas[leftCoords[1]][rightCoords[0]] = '*';
  canvas[rightCoords[1]][leftCoords[0]] = '*';

  for (let i = leftCoords[0] + 1; i < rightCoords[0]; i++) {
    canvas[leftCoords[1]][i] = '-';
    canvas[rightCoords[1]][i] = '-';
  }

  for (let j = leftCoords[1] + 1; j < rightCoords[1]; j++) {
    canvas[j][leftCoords[0]] = '|';
    canvas[j][rightCoords[0]] = '|';
  }

  return canvas;
};

console.log(
  DrawRectangle(
    [
      ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
      ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
      ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
      ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
      ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']
    ],
    [1, 1, 4, 3]
  )
);

/* Perhaps it would be easier to simplify to exact solution above, condensed. This version is identical to version 1 other than I am using destructuring to pull out the coords. Example:   */

const DrawRectangleV2 = (
  canvas: string[][],
  rectangle: number[]
): string[][] => {
  const [x1, y1, x2, y2] = rectangle;
  canvas[y1][x1] = canvas[y1][x2] = canvas[y2][x1] = canvas[y2][x2] = '*';

  for (let i = x1 + 1; i < x2; i++) {
    canvas[y1][i] = '-';
    canvas[y2][i] = '-';
  }
  for (let j = y1 + 1; j < y2; j++) {
    canvas[j][x1] = '|';
    canvas[j][x2] = '|';
  }
  return canvas;
};

console.log(
  DrawRectangleV2(
    [
      ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
      ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
      ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
      ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
      ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']
    ],
    [1, 1, 4, 3]
  )
);
