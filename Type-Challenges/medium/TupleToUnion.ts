/* eslint-disable no-unused-vars */
/**
 * Implement a generic TupleToUnion<T> which covers the values of a tuple to its values union.

For example:

```
type Arr = ['1', '2', '3']

type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
```
 */

type Arr = ['1', '2', '3'];

type TupleToUnion<Tuple extends readonly unknown[]> = Tuple[number];

type TupleToUnionV2<T extends readonly unknown[]> = T extends [
  T[0],
  ...infer Rest
]
  ? T[0] | TupleToUnionV2<Rest>
  : never;

type Test = TupleToUnion<Arr>;
type Test2 = TupleToUnionV2<Arr>;
