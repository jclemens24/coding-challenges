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
