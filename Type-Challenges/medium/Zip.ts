/* eslint-disable no-unused-vars */
/**
 * In This Challenge, You should implement a type Zip<T, U>, T and U must be Tuple
```
type exp = Zip<[1, 2], [true, false]> // expected to be [[1, true], [2, false]]
```
 */

import type { Expect, Equal } from '@type-challenges/utils';

type Zip<
  T extends readonly unknown[],
  U extends readonly unknown[],
  Result extends readonly unknown[] = []
> = T['length'] extends 0
  ? Result
  : U['length'] extends 0
  ? Result
  : T extends [infer TFirst, ...infer TRest]
  ? U extends [infer UFirst, ...infer URest]
    ? Zip<TRest, URest, [...Result, [TFirst, UFirst]]>
    : Result
  : Result;

type cases = [
  Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
  Expect<
    Equal<
      Zip<[19, 22, 28], ['nineteen', 'twenty-two', 'twenty-eight']>,
      [[19, 'nineteen'], [22, 'twenty-two'], [28, 'twenty-eight']]
    >
  >
];
