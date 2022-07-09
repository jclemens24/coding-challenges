/**
 * Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.
 *
 * @param {number[]} statues
 * @returns The number of missing ints between the smallest and largest num
 */

function MakeArrayConsecutive(statues: number[]): number {
  const min = Math.min(...statues);
  const max = Math.max(...statues);
  const missingStatues = new Set(statues);

  for (let i = min; i < max; i++) {
    missingStatues.add(i);
  }
  console.log(missingStatues);

  return missingStatues.size - statues.length;
}

console.log(MakeArrayConsecutive([6, 2, 3, 8]));
console.log(MakeArrayConsecutive([0, 3]));
console.log(MakeArrayConsecutive([5, 4, 6]));

/**
 * Version 2
 *
 * This version operates much more cleanly in a sense because it gets the max number and subtracts the min number and then uses the array.length - 1 to gauge how many missing numbers will need to be added. The calcs performed here doesn't care which numbers are missing, it just knows how many should be there. For that reason, it is better than version 1 above because the for loop runs uncessarily for numbers that are already present in the statues array.
 */

function MakeArrayConsecutiveV2(statues: number[]): number {
  return Math.max(...statues) - Math.min(...statues) - statues.length + 1;
}

console.log(MakeArrayConsecutiveV2([6, 2, 3, 8]));
console.log(MakeArrayConsecutiveV2([0, 3]));
console.log(MakeArrayConsecutiveV2([5, 4, 6]));
