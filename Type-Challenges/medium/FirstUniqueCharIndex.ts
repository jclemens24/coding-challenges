/* eslint-disable no-unused-vars */
/**
 * Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1. (Inspired by leetcode 387)
 */

import type { Expect, Equal } from '@type-challenges/utils';

type FirstUniqueCharIndex<
  Str extends string,
  Result extends readonly unknown[] = []
> = Str extends ''
  ? -1
  : Str extends `${infer First}${infer Next}`
  ? First extends Result[number]
    ? FirstUniqueCharIndex<Next, [...Result, First]>
    : Next extends `${string}${First}${string}`
    ? FirstUniqueCharIndex<Next, [...Result, First]>
    : Result['length']
  : -1;

type cases = [
  Expect<Equal<FirstUniqueCharIndex<'aaaa'>, -1>>,
  Expect<Equal<FirstUniqueCharIndex<'jordan'>, 0>>
];
