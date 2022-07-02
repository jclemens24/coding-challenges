/**
 * You have `k` apple boxes full of apples. Each square box of size m contains m × m apples. You just noticed two interesting properties about the boxes:

1. The smallest box is size `1`, the next one is size `2`,..., all the way up to size `k`.

2. Boxes that have an odd size contain only yellow apples. Boxes that have an even size contain only red apples.

Your task is to calculate the difference between the number of red apples and the number of yellow apples.

Example

For `k = 5`, the output should be
`solution(k) = -15`.

There are `1 + 3 * 3 + 5 * 5 = 35` yellow apples and `2 * 2 + 4 * 4 = 20` red apples, making the answer `20 - 35 = -15`.
 */

const AppleBoxes = function (k: number): number {
  let redApples = 0;
  let yellowApples = 1;

  for (let i = 2; i <= k; i++) {
    if (i % 2) {
      // these are yellow apples;
      yellowApples += i ** 2;
    } else {
      redApples += i ** 2;
    }
  }
  return redApples - yellowApples;
};

console.log(AppleBoxes(5));
console.log(AppleBoxes(15));
console.log(AppleBoxes(36));
console.log(AppleBoxes(1));

// We can also take a more functional approach

const AppleBoxesV2 = function (k: number): number {
  return (Math.pow(-1, k) * k * (k + 1)) / 2;
};

console.log(AppleBoxesV2(5));
console.log(AppleBoxesV2(15));
console.log(AppleBoxesV2(36));
