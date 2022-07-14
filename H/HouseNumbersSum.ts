/**
 * A boy is walking a long way from school to his home. To make the walk more fun he decides to add up all the numbers of the houses that he passes by during his walk. Unfortunately, not all of the houses have numbers written on them, and on top of that the boy is regularly taking turns to change streets, so the numbers don't appear to him in any particular order.

At some point during the walk the boy encounters a house with number 0 written on it, which surprises him so much that he stops adding numbers to his total right after seeing that house.

For the given sequence of houses determine the sum that the boy will get. It is guaranteed that there will always be at least one 0 house on the path.
 */

function HouseNumbersSum(inputArray: number[]): number {
  let sum = 0;

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === 0) break;
    sum += inputArray[i];
  }
  return sum;
}

console.log(HouseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));

function HouseNumbersSumV2(inputArray: number[]): number {
  return inputArray
    .slice(0, inputArray.indexOf(0))
    .reduce((prev, curr) => prev + curr, 0);
}

console.log(HouseNumbersSumV2([5, 1, 2, 3, 0, 1, 5, 0, 2]));

function HouseNumbersSumV3(inputArray: number[]): number {
  let sum = 0;

  for (const n of inputArray) {
    if (n === 0) break;
    sum += n;
  }
  return sum;
}

console.log(HouseNumbersSumV3([5, 1, 2, 3, 0, 1, 5, 0, 2]));
