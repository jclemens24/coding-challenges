/* eslint-disable no-unused-vars */
/**
 * Implement the type version of Lodash.without, Without<T, U> takes an Array T, number or array U and returns an Array without the elements of U.
```
type Res = Without<[1, 2], 1>; // expected to be [2]
type Res1 = Without<[1, 2, 4, 1, 5], [1, 2]>; // expected to be [4, 5]
type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // expected to be []
```
 */

import { Expect, Equal } from '@type-challenges/utils';

type Without<T extends unknown[], U extends number | unknown[]> = T extends [
  infer F,
  ...infer R
]
  ? F extends (U extends unknown[] ? U[number] : U)
    ? Without<R, U>
    : [F, ...Without<R, U>]
  : [];

type Res = Without<[1, 2], 1>; // expected to be [2]
type Res1 = Without<[1, 2, 4, 1, 5], [1, 2]>; // expected to be [4, 5]
type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // expected to be []

type WithoutV2<
  T extends unknown[],
  U extends number | unknown[],
  Result extends unknown[] = []
> = T extends [infer F, ...infer R]
  ? F extends (U extends unknown[] ? U[number] : U)
    ? WithoutV2<R, U, [...Result]>
    : WithoutV2<R, U, [...Result, F]>
  : Result;

type cases = [
  Expect<Equal<WithoutV2<[1, 2], 1>, [2]>>,
  Expect<Equal<WithoutV2<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>
];

export {};
