/* eslint-disable no-unused-vars */
/**
 * Convert a string literal to a number, which behaves like Number.parseInt.
 */

type StringToNumber<
  S extends string,
  Result extends unknown[] = []
> = S extends `${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`
  ? StringToNumber<S, [...Result, 1]>
  : `${Result['length']}` extends `${S}`
  ? Result['length']
  : StringToNumber<S, [...Result, 1]>;

type test1 = StringToNumber<'1'>;

export {};
