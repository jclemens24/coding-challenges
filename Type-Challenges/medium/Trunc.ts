/* eslint-disable no-unused-vars */
/**
 * Implement the type version of Math.trunc, which takes string or number and returns the integer part of a number by removing any fractional digits.

For example:
``
type A = Trunc<12.34> // 12
``
 */

type Trunc<T extends string | number> = `${T}` extends `${infer F}.${infer _R}`
  ? F
  : `${T}`;

type A = Trunc<'12.34'>;
type B = Trunc<12.34>;

export {};
