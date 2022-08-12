/* eslint-disable no-unused-vars */
/**
 * Implement the type version of Array.unshift

For example:

```
type Result = Unshift<[1, 2], 0> // [0, 1, 2,]
```
 */

type ArrayUnshift<T extends readonly unknown[], Item extends unknown> = [
  Item,
  ...T
];

type Result = ArrayUnshift<[1, 2], 0>;
