/* eslint-disable no-unused-vars */
/**
 * Sometimes it's useful to detect if you have a value with `any` type. This is especially helpful while working with third-party Typescript modules, which can export `any` values in the module API. It's also good to know about `any` when you're suppressing implicitAny checks.

So, let's write a utility type `IsAny<T>`, which takes input type `T`. If `T` is any, return `true`, otherwise, return `false`.

Read this table to understand more about abstract type assignability:

See {@link [Type Compatibility] https://www.typescriptlang.org/docs/handbook/type-compatibility.html#any-unknown-object-void-undefined-null-and-never-assignability}
 */

/* 
I actually read up on this implementation wayyy before this assignment. This is a popular util. How it works...It should be impossible for 0 to extend 1. However, when 'T' is 'any', it reduces to '0 extends (1 & any)' to '0 extends any', which satisfies the constraint and resolves to true. This is due to how 'any' works in TypeScript. 'Any' acts as both a supertype and subtype of almost every other type. 
*/
import type { Expect, Equal } from '@type-challenges/utils';

type IsAnyType<T> = 0 extends 1 & T ? true : false;

type cases = [
  Expect<Equal<IsAnyType<any>, true>>,
  Expect<Equal<IsAnyType<unknown>, false>>,
  Expect<Equal<IsAnyType<undefined>, false>>,
  Expect<Equal<IsAnyType<9>, false>>
];

export {};
