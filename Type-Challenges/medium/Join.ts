/* eslint-disable no-unused-vars */
/**
 * Implement the type version of Array.join, Join<T, U> takes an Array T, string or number U and returns the Array T with U stitching up.

```
type Res = Join<["a", "p", "p", "l", "e"], "-">; // expected to be 'a-p-p-l-e'
type Res1 = Join<["Hello", "World"], " ">; // expected to be 'Hello World'
type Res2 = Join<["2", "2", "2"], 1>; // expected to be '21212'
type Res3 = Join<["o"], "u">; // expected to be 'o'
```
 */

type Join<T extends unknown[], U extends string | number> = T extends [
  infer First extends string,
  ...infer Rest
]
  ? `${First}${Rest extends [] ? '' : U}${Join<Rest, U>}`
  : '';

type JoinV2<
  T extends readonly unknown[],
  U extends string | number
> = T extends [infer First, ...infer Rest]
  ? Rest['length'] extends 0
    ? `${string & First}`
    : `${string & First}${U}${JoinV2<Rest, U>}`
  : never;

type Res = Join<['a', 'p', 'p', 'l', 'e'], '-'>; // expected to be 'a-p-p-l-e'
type Res2 = JoinV2<['2', '2', '2'], 1>; // expected to be '21212'

export {};
