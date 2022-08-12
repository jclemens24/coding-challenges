/* eslint-disable no-unused-vars */
/**
 * Compute the length of a string literal, which behaves like String#length.
 */

type StringLength<
  S extends string,
  Length extends readonly unknown[] = []
> = S extends `${infer Head}${infer Tail}`
  ? StringLength<Tail, [...Length, Head]>
  : Length['length'];

type str = 'Jordan';
type LengthOfstr = StringLength<str>;
