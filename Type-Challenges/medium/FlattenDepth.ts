/* eslint-disable no-unused-vars */
/**
 * Recursively flatten array up to depth times.

For example:

```
type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times
type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1
```

If the depth is provided, it's guaranteed to be positive integer.

 */

import type { Expect, Equal } from '@type-challenges/utils';

type FlattenDepth<
  T extends unknown[],
  N extends number = 1,
  U extends unknown[] = []
> = U['length'] extends N
  ? T
  : T extends [infer First, ...infer Rest]
  ? First extends unknown[]
    ? [...FlattenDepth<First, N, [...U, unknown]>, ...FlattenDepth<Rest, N, U>]
    : [First, ...FlattenDepth<Rest, N, U>]
  : T;

type Result = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>;
type cases = [
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, [[5]]]>>
];
export {};
