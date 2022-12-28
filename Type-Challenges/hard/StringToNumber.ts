/* eslint-disable no-unused-vars */
/**
 * Convert a string literal to a number, which behaves like Number.parseInt.
 */

import type { Expect, Equal } from '@type-challenges/utils';

type StringToNumber<S extends string = '0'> =
  S extends `${infer Num extends number}` ? Num : never;

type cases = [
  Expect<Equal<StringToNumber<'0'>, 0>>,
  Expect<Equal<StringToNumber<'5'>, 5>>,
  Expect<Equal<StringToNumber<'12'>, 12>>,
  Expect<Equal<StringToNumber<'27'>, 27>>,
  Expect<Equal<StringToNumber<'18@7_$%'>, never>>,
  Expect<Equal<StringToNumber, 0>>
];
export {};
