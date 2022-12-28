/* eslint-disable no-unused-vars */
/**
 * Implement the type Filter<T, Predicate> takes an Array T, primitive type or union primitive type Predicate and returns an Array include the elements of Predicate.
 */

import type { Equal, Expect } from '@type-challenges/utils';

type Filter<
  T extends readonly unknown[],
  Predicate extends unknown
> = T extends [infer Head, ...infer Tail]
  ? [...(Head extends Predicate ? [Head] : []), ...Filter<Tail, Predicate>]
  : [];

type Filter2<
  TArray extends readonly unknown[],
  Predicate,
  Result extends unknown[] = []
> = TArray extends [infer First, ...infer Rest]
  ? First extends Predicate
    ? Filter2<Rest, Predicate, [...Result, First]>
    : Filter2<Rest, Predicate, Result>
  : Result;

type Falsy = false | 0 | '' | null | undefined;
type Cases = [
  Expect<Equal<Filter<[0, 1, 2], 2>, [2]>>,
  Expect<Equal<Filter2<[0, 1, 2], 2>, [2]>>,
  Expect<Equal<Filter<[0, 1, 2], 0 | 1>, [0, 1]>>,
  Expect<Equal<Filter2<[0, 1, 2], 0 | 1>, [0, 1]>>,
  Expect<Equal<Filter<[0, 1, 2], Falsy>, [0]>>,
  Expect<Equal<Filter2<[0, 1, 2], Falsy>, [0]>>
];

export {};
