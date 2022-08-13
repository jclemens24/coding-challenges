/* eslint-disable no-unused-vars */
/**
 * Implement the type version of Array.reverse

For example:

```
type a = Reverse<['a', 'b']> // ['b', 'a']
type b = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']
```
 */

export type Reverse<
  TArray extends unknown[],
  UArray extends unknown[] = []
> = TArray extends [infer First, ...infer Rest]
  ? Reverse<Rest, [First, ...UArray]>
  : UArray;

type a = Reverse<['a', 'b']>; // ['b', 'a']
type b = Reverse<['a', 'b', 'c']>; // ['c', 'b', 'a']

export {};
