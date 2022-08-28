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
  const numOfCigs = bars * 10 * 18 + boxes * 18;
  let rolledCigs: number = numOfCigs;
  let stubs: number = numOfCigs;
  const CAN_MAKE_STUBS = 5;

  while (rolledCigs >= 5) {
    const added = Math.floor(rolledCigs / CAN_MAKE_STUBS);
    rolledCigs -= added * CAN_MAKE_STUBS;
    stubs += added;
    rolledCigs += added;
  }
  return stubs;
}

console.log(startSmoking(0, 1));
console.log(startSmoking(1, 0));
console.log(startSmoking(1, 1));

export function startSmokingV2(
  bars: number,
  boxes: number,
  result = 0
): number {
  const cigarettes = bars * 180 + boxes * 18;
  if (cigarettes === 0 && result < 5) {
    return 0;
  }
  const rolled = Math.floor(result / 5);
  return (
    cigarettes +
    rolled +
    startSmokingV2(0, 0, cigarettes + rolled + (result % 5))
  );
}

console.log(startSmokingV2(0, 1));
console.log(startSmokingV2(1, 0));
console.log(startSmokingV2(1, 1));

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
