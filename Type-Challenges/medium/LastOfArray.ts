/* eslint-disable no-unused-vars */
/**
 * Implement a generic Last<T> that takes an Array T and returns its last element.

For example

```
type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type tail1 = Last<arr1> // expected to be 'c'
type tail2 = Last<arr2> // expected to be 1
```
 */

type LastOfArray<T extends Array<unknown>> = T extends [
  ...infer _Firsts,
  infer Last
]
  ? Last
  : never;

type arr1 = ['a', 'b', 'c'];
type tail1 = LastOfArray<arr1>;
