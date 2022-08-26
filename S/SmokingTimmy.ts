/**
 * Timothy (age: 16) really likes to smoke. Unfortunately, he is too young to buy his own cigarettes and that's why he has to be extremely efficient in smoking.

It's now your task to create a function that calculates how many cigarettes Timothy can smoke out of the given amounts of bars and boxes:

a bar has 10 boxes of cigarettes,
a box has 18 cigarettes,
out of 5 stubs (cigarettes ends) Timothy is able to roll a new one,
of course the self made cigarettes also have an end which can be used to create a new one...
Please note that Timothy never starts smoking cigarettes that aren't "full size" so the amount of smoked cigarettes is always an integer.
 */

export function startSmoking(bars: number, boxes: number): number {
  const totalBoxes = 10 * bars + boxes;
  let numberOfCigs = totalBoxes * 18;
  let rolledCigs: number = 0;
  const CAN_MAKE_STUBS = 5;
  let result = numberOfCigs;

  while (numberOfCigs > 0) {
    rolledCigs = Math.floor((numberOfCigs + rolledCigs) / CAN_MAKE_STUBS);
    console.log(rolledCigs);
    result += rolledCigs;
    numberOfCigs -= rolledCigs * CAN_MAKE_STUBS;
  }
  return result;
}

console.log(startSmoking(0, 1));
console.log(startSmoking(1, 0));

export function checkDuplicates(array: number[]): number[] {
  const arr: number[] = [];
  let counter: number = 1;

  for (let i = 0; i < array.length; i++) {
    const curr = array[i];
    const next = array[i + 1];
    if (curr === next) {
      counter++;
    } else {
      arr.push(counter);
      counter = 1;
    }
  }
  return arr;
}

console.log(checkDuplicates([1, 1, 1, 2, 3, 1, 1]));

export function checkDuplicatesV2(array: number[]): number[] {
  console.log(array.join(''));
  return (
    array
      .join(',')
      .match(/(\d+,)\1*/g)
      ?.map((a, i) =>
        i !== array.length - 1 ? a.split(',').length - 1 : a.length + 1
      ) || []
  );
}

console.log(checkDuplicatesV2([1, 1, 1, 2, 3, 1, 1]));
