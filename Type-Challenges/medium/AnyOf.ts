/* eslint-disable no-unused-vars */
/**
 * Implement Python liked any function in the type system. A type takes the Array and returns true if any element of the Array is true. If the Array is empty, return false.

For example:

```
type Sample1 = AnyOf<[1, '', false, [], {}]> // expected to be true.
type Sample2 = AnyOf<[0, '', false, [], {}]> // expected to be false.
```
 */

type IsFalsy = false | 0 | '' | [] | Record<any, never>;

type AnyOf<T extends readonly unknown[]> = T extends [
  infer First,
  ...infer Rest
]
  ? First extends IsFalsy
    ? AnyOf<Rest>
    : true
  : false;

type Sample1 = AnyOf<[1, '', false, [], {}]>;
type Sample2 = AnyOf<[0, '', false, [], {}]>;
