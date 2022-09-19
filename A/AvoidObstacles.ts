/**
 *
 * @param {number[]} inputArr
 * @returns The number of elements not divisible by jump
 */

/* 
You are given an array of integers representing coordinates of obstacles situated on a straight line.

Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.

Find the minimal length of the jump enough to avoid all the obstacles.

*/

function AvoidObstacles(inputArr: number[]): number {
  for (let n = 1; ; n++) {
    if (inputArr.every((x) => x % n)) return n;
  }
}

console.log(AvoidObstacles([5, 3, 6, 7, 9]));

function AvoidObstaclesV2(inputArr: number[]): number {
  let jump: number = 2;

  while (inputArr.some((obstacle) => obstacle % jump === 0)) {
    jump++;
  }
  return jump;
}

console.log(AvoidObstaclesV2([5, 3, 6, 7, 9]));

function AvoidObstaclesV3(inputArr: number[], jump = 2): number {
  return inputArr.every((e) => e % jump)
    ? jump
    : AvoidObstaclesV3(inputArr, jump + 1);
}

console.log(AvoidObstaclesV3([5, 3, 6, 7, 9]));

export class Kata {
  static findLongest(array: number[]): number {
    return array.reduce(
      (acc, curr) => (`${acc}`.length < `${curr}`.length ? curr : acc),
      0
    );
  }
}

console.log(Kata.findLongest([1, 10, 100]));

export function balancedNum(number: number) {
  if (number.toString().length % 2 === 0) {
    const [left, right] = [
      [...`${number}`].slice(0, number.toString().length / 2 - 1),
      [...`${number}`].slice(number.toString().length / 2 + 1)
    ];

    return left.reduce((acc, curr) => acc + parseInt(curr), 0) ===
      right.reduce((acc, curr) => acc + parseInt(curr), 0)
      ? 'Balanced'
      : 'Not Balanced';
  }
  const [left, right] = [
    number.toString().slice(0, Math.floor(number.toString().length / 2)),
    number.toString().slice(Math.ceil(number.toString().length / 2))
  ];

  const l = [...left].reduce((acc, curr) => acc + parseInt(curr), 0);
  const r = [...right].reduce((acc, curr) => acc + +curr, 0);
  return l === r ? 'Balanced' : 'Not Balanced';
}

console.log(balancedNum(12309));
