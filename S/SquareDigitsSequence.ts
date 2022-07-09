/**
 *Consider a sequence of numbers a0, a1, ..., an, in which an element is equal to the sum of squared digits of the previous element. The sequence ends once an element that has already been in the sequence appears again.

Given the first element a0, find the length of the sequence.

I prefer using Sets for when values need to be unique (sounds silly to say because thats how Sets work). The while loop will check the Set each iteration to ensure we don't have duplicate values. The first time a duplicate is attempted to be .add(a0), the loop breaks. We return tracker.size + 1 to account for the iteration that repeated a0 value.
 */

function SquareDigitsSequence(a0: number): number {
  const tracker = new Set();

  while (!tracker.has(a0)) {
    console.log(tracker.entries());
    tracker.add(a0);
    a0 = a0
      .toString(10)
      .split('')
      .reduce((a, b) => a + Math.pow(+b, 2), 0);
  }
  console.log(tracker.values());
  return tracker.size + 1;
}

console.log(SquareDigitsSequence(16));

function SquareDigitsSequenceV2(a0: number): number {
  const instances = { [a0]: true };
  let cumulative = a0;

  while (cumulative) {
    cumulative = cumulative
      .toString(10)
      .split('')
      .reduce((acc, curr) => acc + Math.pow(+curr, 2), 0);

    if (instances[cumulative]) break;
    instances[cumulative] = true;
  }
  return Object.keys(instances).length + 1;
}

console.log(SquareDigitsSequenceV2(16));
