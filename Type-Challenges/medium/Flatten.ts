/* eslint-disable no-unused-vars */
/**
 * In this challenge, you would need to write a type that takes an array and emitted the flatten array type.

For example:

```
type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]
```
 */

type Flatten<T extends unknown[]> = T extends [infer First, ...infer Rest]
  ? First extends unknown[]
    ? [...Flatten<First>, ...Flatten<Rest>]
    : [First, ...Flatten<Rest>]
  : T;

type Flat = Flatten<[1, 2, [3, 4], [[5]]]>;

export {};
