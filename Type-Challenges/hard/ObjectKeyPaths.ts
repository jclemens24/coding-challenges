/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/**
 * Get all possible paths that could be called by _.get (a lodash function) to get the value of an object

```
type T1 = ObjectKeyPaths<{ name: string; age: number }>; // expected to be 'name' | 'age'
type T2 = ObjectKeyPaths<{
  refCount: number;
  person: { name: string; age: number };
}>; // expected to be 'refCount' | 'person' | 'person.name' | 'person.age'
type T3 = ObjectKeyPaths<{ books: [{ name: string; price: number }] }>; // expected to be the superset of 'books' | 'books.0' | 'books[0]' | 'books.[0]' | 'books.0.name' | 'books.0.price' | 'books.length' | 'books.find'
```
 */

/// <reference types="node" />

type ObjectKeyPaths<T extends object, Prop extends string = ''> = {
  [key in keyof T]: (
    [Prop, ''] extends ['', Prop] ? key : `${Prop}.${key & string}`
  ) extends infer Key
    ? T[key] extends ReadonlyArray<unknown>
      ? BreakdownArray<T[key], Key & string> | Key
      : T[key] extends Record<PropertyKey, unknown>
      ? ObjectKeyPaths<T[key], Key & string> | Key
      : Key
    : never;
}[keyof T] extends infer O
  ? {
      [K in keyof O]: O[K];
    }
  : never;

type BreakdownArray<
  T extends ReadonlyArray<unknown>,
  Str extends string = ''
> = {
  [Key in keyof T]: Key extends string
    ? (
        [Str, ''] extends ['', Str]
          ? Key
          : `${Str}.${Key}` | `${Str}[${Key}]` | `${Str}.[${Key}]`
      ) extends infer Prop
      ? T[Key] extends ReadonlyArray<unknown>
        ? BreakdownArray<T[Key], Prop & string> | Prop
        : T[Key] extends Record<PropertyKey, unknown>
        ? ObjectKeyPaths<T[Key], Prop & string> | Prop
        : Prop
      : never
    : never;
}[number];

type T1 = ObjectKeyPaths<{ name: string; age: number }>; // expected to be 'name' | 'age'
type T2 = ObjectKeyPaths<{
  refCount: number;
  person: { name: string; age: number };
}>; // expected to be 'refCount' | 'person' | 'person.name' | 'person.age'
type T3 = ObjectKeyPaths<{ books: [{ name: string; price: number }] }>; // expected to be the superset of 'books' | 'books.0' | 'books[0]' | 'books.[0]' | 'books.0.name' | 'books.0.price' | 'books.length' | 'books.find'
