/**
 * Task
Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.

Notes:
List size is at least 3.

All numbers will be positive.

Numbers could occur more than once , (Duplications may exist).

Threshold K will always be reachable.

Input >> Output Examples
minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)
 */

export function minimumSteps(nums: number[], value: number) {
  nums.sort((a, b) => a - b);
  let sum: number = 0;
  let loops: number = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum >= value) {
      loops = i;
      break;
    }
  }
  return loops;
}

console.log(minimumSteps([1, 10, 12, 9, 2, 3], 6));
console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464));

export function minimumStepsV2(nums: number[], target: number) {
  const sorted = nums.sort((a, b) => a - b);
  let i: number = 0;
  let sum: number = sorted[i];

  while (sum < target) {
    i += 1;
    sum += sorted[i];
  }
  return i;
}
