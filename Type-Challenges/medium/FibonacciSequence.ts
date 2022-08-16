/* eslint-disable no-unused-vars */
/**
 * Implement a generic Fibonacci<T> takes an number T and returns it's corresponding Fibonacci number.

```
The sequence starts: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

For example

type Result1 = Fibonacci<3> // 2
type Result2 = Fibonacci<8> // 21
```
 */

import { Expect, Equal } from '@type-challenges/utils';

type Fibonacci<
  T extends number,
  Prev extends unknown[] = [unknown],
  Curr extends unknown[] = [],
  Index extends unknown[] = []
> = T extends Index['length']
  ? Curr['length']
  : Fibonacci<T, [...Curr], [...Prev, ...Curr], [...Index, 1]>;

type Result1 = Fibonacci<3>; // 2
type Result2 = Fibonacci<8>; // 21

type FibonacciV2<
  T extends number,
  Index extends readonly unknown[] = [1],
  Prev extends readonly unknown[] = [],
  Curr extends readonly unknown[] = [1]
> = T extends Index['length']
  ? Curr['length']
  : FibonacciV2<T, [...Index, 1], Curr, [...Prev, ...Curr]>;

type cases = [Expect<Equal<FibonacciV2<8>, 21>>];

export {};
