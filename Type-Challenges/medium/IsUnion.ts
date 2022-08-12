/* eslint-disable no-unused-vars */
/**
 * Implement a type IsUnion, which takes an input type T and returns whether T resolves to a union type.

For example:

```
type case1 = IsUnion<string>  // false
type case2 = IsUnion<string|number>  // true
type case3 = IsUnion<[string|number]>  // false
```
 */

type IsUnion<T, Union = T> = T extends Union
  ? [Union] extends [T]
    ? false
    : true
  : never;

type case1 = IsUnion<string>; // false
type case2 = IsUnion<string | number>; // true
type case3 = IsUnion<[string | number]>; // false
