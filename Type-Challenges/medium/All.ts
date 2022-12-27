/* eslint-disable no-unused-vars */
/**
 * Returns true if all elements of the list are equal to the second parameter passed in, false if there are any mismatches.

For example

type Test1 = [1, 1, 1]
type Test2 = [1, 1, 2]

type Todo = All<Test1, 1> // should be same as true
type Todo2 = All<Test2, 1> // should be same as false
 */

import type { Expect, Equal } from '@type-challenges/utils';

type All<T extends unknown[], N extends T[number]> = T extends [
  infer F,
  ...infer R
]
  ? F extends N
    ? All<R, N>
    : false
  : T extends []
  ? true
  : false;

type Test1 = [1, 1, 1];
type ToDo1 = All<Test1, 1>;

type Test2 = [1, 1, 2];
type ToDo2 = All<Test2, 1>;

type Cases = [
  Expect<Equal<All<Test1, 1>, true>>,
  Expect<Equal<All<Test2, 1>, false>>
];

export {};
