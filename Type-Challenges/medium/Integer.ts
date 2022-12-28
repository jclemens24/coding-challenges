/* eslint-disable no-unused-vars */
/**
 * Please complete type Integer<T>, type T inherits from number, if T is an integer return it, otherwise return never.
 */

import type { Expect, Equal } from '@type-challenges/utils';

type Integer<T extends number> =
  `${T}` extends `${infer First}.${infer _Next extends 0}`
    ? First
    : `${T}` extends `${infer Head extends number}${infer _Tail}`
    ? T extends Head
      ? number extends Head
        ? never
        : Head
      : never
    : never;

const x: number = 1;
const y = 1 as const;

type cases1 = [
  Expect<Equal<Integer<1>, 1>>,
  Expect<Equal<Integer<1.1>, never>>,
  Expect<Equal<Integer<1.0>, 1>>,
  Expect<Equal<Integer<typeof x>, never>>,
  Expect<Equal<Integer<typeof y>, 1>>
];

export {};
