/* eslint-disable no-unused-vars */
/**
 * Do you know lodash? Chunk is a very useful function in it, now let's implement it. Chunk<T, N> accepts two required type parameters, the T must be a tuple, and the N must be an integer >=1

```
type exp1 = Chunk<[1, 2, 3], 2> // expected to be [[1, 2], [3]]
type exp2 = Chunk<[1, 2, 3], 4> // expected to be [[1, 2, 3]]
type exp3 = Chunk<[1, 2, 3], 1> // expected to be [[1], [2], [3]]
```
 */
import type { Expect, Equal } from '@type-challenges/utils';

type Chunk<
  T extends readonly unknown[],
  N extends number,
  Result extends readonly unknown[] = []
> = T extends [infer First, ...infer Rest]
  ? Result['length'] extends N
    ? [Result, ...Chunk<Rest, N, [First]>]
    : Chunk<Rest, N, [...Result, First]>
  : Result extends []
  ? []
  : [Result];

type cases = [
  Expect<Equal<Chunk<[1, 2, 3], 2>, [[1, 2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3], 4>, [[1, 2, 3]]>>,
  Expect<Equal<Chunk<[1, 2, 3], 1>, [[1], [2], [3]]>>
];
