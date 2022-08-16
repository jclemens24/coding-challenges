/* eslint-disable no-unused-vars */
/**
 * Sometimes we want to limit the range of numbers... For examples.
```
type result = NumberRange<2 , 9> //  | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 
```
 */

import { Expect, Equal } from '@type-challenges/utils';

type NumberRange<
  From extends number,
  To extends number,
  Res extends readonly unknown[] = [],
  Start extends readonly unknown[] = [],
  End extends readonly unknown[] = []
> = End['length'] extends To
  ? [...Res, End['length']][number]
  : Start['length'] extends From
  ? NumberRange<From, To, [...Res, End['length']], Start, [...End, unknown]>
  : NumberRange<From, To, Res, [...Start, unknown], [...End, unknown]>;

type result = NumberRange<2, 9>; //  | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type cases = [Expect<Equal<NumberRange<10, 13>, 10 | 11 | 12 | 13>>];

export {};
