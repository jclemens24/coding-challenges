/**
 * Scenario
the rhythm of beautiful musical notes is drawing a Pendulum

Beautiful musical notes are the Numbers

Task
Given an `array/list []` of `n` integers , Arrange them in a way similar to the to-and-fro movement of a Pendulum

The Smallest element of the list of integers , must come in center position of array/list.

The Higher than smallest , goes to the right .
The Next higher number goes to the left of minimum number and So on , in a to-and-fro manner similar to that of a Pendulum.
 */

export function pendulum(values: number[]) {
  const evens: number[] = [];
  const odds: number[] = [];

  values = values
    .sort((a, b) => a - b)
    .map((num, i) => (i % 2 ? odds : evens).push(num));

  return evens.reverse().concat(odds);
}

console.log(pendulum([4, 10, 9]));

export function pendulumV2(values: number[]): number[] {
  return values
    .sort((a, b) => a - b)
    .reduce((acc: number[], curr, i) => {
      if (i % 2 === 0) {
        acc.unshift(curr);
      } else {
        acc.push(curr);
      }
      return acc;
    }, []);
}

console.log(pendulumV2([4, 10, 9]));
