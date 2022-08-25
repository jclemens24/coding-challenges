/**
 * The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:
```
1.08 --> 30
```
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
 */

export function cockroachSpeed(s: number): number {
  return Math.floor(s * 27.78);
}

console.log(cockroachSpeed(1.08));
console.log(process.execPath);
