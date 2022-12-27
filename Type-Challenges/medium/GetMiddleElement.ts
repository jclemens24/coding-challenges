/* eslint-disable no-unused-vars */
/**
 * Get the middle element of the array by implementing a GetMiddleElement method, represented by an array

If the length of the array is odd, return the middle element If the length of the array is even, return the middle two elements

For example

```
  type simple1 = GetMiddleElement<[1, 2, 3, 4, 5]>, // expected to be [3]
  type simple2 = GetMiddleElement<[1, 2, 3, 4, 5, 6]> // expected to be [3, 4]
```
 */

type GetMiddleElement<T extends readonly unknown[]> = T extends [
  infer _First,
  ...infer Rest,
  infer _Last
]
  ? Rest extends []
    ? T
    : GetMiddleElement<Rest>
  : T;

type simple1 = GetMiddleElement<[1, 2, 3]>;
