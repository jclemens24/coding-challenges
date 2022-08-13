/* eslint-disable no-unused-vars */
/**
 * Implement the type version of Array.shift

For example

```
type Result = Shift<[3, 2, 1]> // [2, 1]
```
 */

type Shift<T extends Array<unknown>> = T extends [infer _First, ...infer Rest]
  ? Rest
  : never;

type Result = Shift<[3, 2, 1]>;

export {};
