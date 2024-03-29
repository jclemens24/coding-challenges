/* eslint-disable no-unused-vars */
/**
 * Implement a utils If which accepts condition C, a truthy return type T, and a falsy return type F. C is expected to be either true or false while T and F can be any type.

For example:
```
type A = If<true, 'a', 'b'>  // expected to be 'a'
type B = If<false, 'a', 'b'> // expected to be 'b'
```
 */

type If<C extends boolean, T, F> = C extends true ? T : F;

type A = If<true, 'a', 'b'>;
type B = If<false, 'a', 'b'>;

export {};
