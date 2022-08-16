/* eslint-disable no-unused-vars */
/**
 * Given an array of unique elements, return all possible subsequences.

A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements.

For example:
```
type A = Subsequence<[1, 2]> // [] | [1] | [2] | [1, 2]
```
 */

type Subsequence<T extends unknown[]> = T extends [infer F, ...infer R]
  ? [F] | Subsequence<R> | [F, ...R]
  : [];

type SubsequenceV2<T extends readonly unknown[]> = T extends [
  infer F,
  ...infer R
]
  ? [] | [F] | [F, ...SubsequenceV2<R>] | SubsequenceV2<R>
  : [];

type Result = Subsequence<[1, 2]>;
type Result2 = SubsequenceV2<[1, 2]>;
export {};
