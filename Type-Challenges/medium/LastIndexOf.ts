/* eslint-disable no-unused-vars */
/**
 * Implement the type version of Array.lastIndexOf, LastIndexOf<T, U> takes an Array T, any U and returns the index of the last U in Array T

For example:
```
type Res1 = LastIndexOf<[1, 2, 3, 2, 1], 2> // 3
type Res2 = LastIndexOf<[0, 0, 0], 2> // -1
```
 */

import type { Expect, Equal } from '@type-challenges/utils';

type LastIndexOf<T extends readonly unknown[], U> = T extends [
  ...infer Firsts,
  infer Last
]
  ? Equal<Last, U> extends true
    ? Firsts['length']
    : LastIndexOf<Firsts, U>
  : -1;

// expect [true, true, true]
type cases = [
  Expect<Equal<LastIndexOf<[1, 2, 3, 2, 1], 2>, 3>>,
  Expect<
    Equal<LastIndexOf<[19, 22, 55, 101, 34, 35, 9, 2, 8, 35, 153], 35>, 9>
  >,
  Expect<Equal<LastIndexOf<[1, 2, 3, 4, 5], 6>, -1>>
];
