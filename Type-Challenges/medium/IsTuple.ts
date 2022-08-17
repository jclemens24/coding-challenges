/* eslint-disable no-unused-vars */
/**
 * Implement a type IsTuple, which takes an input type T and returns whether T is tuple type.

For example:
```
type case1 = IsTuple<[number]> // true
type case2 = IsTuple<readonly [number]> // true
type case3 = IsTuple<number[]> // false
```
 */

import type { Equal, Expect } from '@type-challenges/utils';

type IsTuple<T extends readonly unknown[]> = T extends readonly [unknown]
  ? true
  : false;

type cases = [
  Expect<Equal<IsTuple<[number]>, true>>,
  Expect<Equal<IsTuple<readonly [number]>, true>>,
  Expect<Equal<IsTuple<number[]>, false>>
];
