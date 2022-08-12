/* eslint-disable no-unused-vars */
/**
 * Implement the JavaScript Array.concat function in the type system. A type takes the two arguments. The output should be a new array that includes inputs in ltr order

For example:
```
type Result = Concat<[1], [2]> // expected to be [1, 2]
```
 */

type Concat<Arr1 extends unknown[], Arr2 extends unknown[]> = [
  ...Arr1,
  ...Arr2
];

type Result = Concat<[1], [2]>;
type CombinedArrs = Concat<[29, 54, 22, 15, 17], [90, 75, 28, 44]>;

export {};
