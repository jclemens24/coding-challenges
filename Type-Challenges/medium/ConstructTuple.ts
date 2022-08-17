/* eslint-disable no-unused-vars */
/**
 * Construct a tuple with a given length.

For example

```
type result = ConstructTuple<2> // expect to be [unknown, unkonwn]
```
 */

import type { Equal, Expect } from '@type-challenges/utils';

type ConstructTuple<
  Num extends number,
  Result extends readonly unknown[] = []
> = Result['length'] extends Num
  ? Result
  : ConstructTuple<Num, [...Result, unknown]>;

type case1 = ConstructTuple<2>;
type cases = [
  Expect<
    Equal<ConstructTuple<5>, [unknown, unknown, unknown, unknown, unknown]>
  >,
  Expect<Equal<ConstructTuple<2>, [unknown, unknown]>>
];
