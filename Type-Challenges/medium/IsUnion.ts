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

type IsUnionV2<T, U extends T = T> = (
  T extends any ? (U extends T ? false : true) : never
) extends false
  ? false
  : true;

type case1 = IsUnion<string>; // false
type case2 = IsUnion<string | number>; // true
type case3 = IsUnion<[string | number]>; // false
type case4 = IsUnionV2<string | number>;
type case5 = IsUnion<string>;

// Me Playing Around ;)
const IndexType: unique symbol = Symbol('IndexType');

type Index<Arr extends { readonly [IndexType]: number }> = Arr extends {
  readonly [IndexType]: infer KeyValue;
}
  ? KeyValue & number
  : never;

type tes19 = Index<{ [IndexType]: 5 }>;

export {};
