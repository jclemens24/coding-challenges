/* eslint-disable no-unused-vars */
/**
 * Implement the type version of Array.indexOf, indexOf<T, U> takes an Array T, any U and returns the index of the first U in Array T.

```
type Res = IndexOf<[1, 2, 3], 2>; // expected to be 1
type Res1 = IndexOf<[2,6, 3,8,4,1,7, 3,9], 3>; // expected to be 2
type Res2 = IndexOf<[0, 0, 0], 2>; // expected to be -1
```
 */

import type { Expect, Equal } from '@type-challenges/utils';

type ExtractT<T extends readonly unknown[]> = T extends (infer U)[] ? U : T;

type IndexOf<
  T extends readonly unknown[],
  U extends any,
  Len extends readonly unknown[] = []
> = T extends [infer First, ...infer Rest]
  ? Equal<First, U> extends true
    ? Len['length']
    : IndexOf<Rest, U, [...Len, First]>
  : -1;

type Res = IndexOf<[1, 2, 3], 2>;
type Res1 = IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>; // expected to be 2
type Cases = [
  Expect<Equal<IndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<IndexOf<[string, 1, number, unknown], number>, 2>>,
  Expect<
    Equal<IndexOf<[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 14>, 13>
  >
];
