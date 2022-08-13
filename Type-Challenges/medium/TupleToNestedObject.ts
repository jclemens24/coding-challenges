/* eslint-disable no-unused-vars */
/**
 * Given a tuple type T that only contains string type, and a type U, build an object recursively.

```
type a = TupleToNestedObject<['a'], string> // {a: string}
type b = TupleToNestedObject<['a', 'b'], number> // {a: {b: number}}
type c = TupleToNestedObject<[], boolean> // boolean. if the tuple is empty, just return the U type
```
 */

type TupleToNestedObject<T extends unknown[], U extends any> = T extends []
  ? U
  : T extends [infer First, ...infer Rest]
  ? {
      [Key in First as First extends PropertyKey
        ? First
        : never]: Rest extends PropertyKey[]
        ? TupleToNestedObject<Rest, U>
        : never;
    }
  : never;

type a = TupleToNestedObject<['a'], string>; // {a: string}
type b = TupleToNestedObject<['a', 'b'], number>; // {a: {b: number}}
type c = TupleToNestedObject<[], boolean>; // boolean. if the tuple is empty, just return the U type

export {};
