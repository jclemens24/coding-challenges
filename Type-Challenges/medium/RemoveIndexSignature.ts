/* eslint-disable no-unused-vars */
/**
 * Implement RemoveIndexSignature<T> , exclude the index signature from object types.

For example:

```
type Foo = {
  [key: string]: any;
  foo(): void;
}

type A = RemoveIndexSignature<Foo>  // expected { foo(): void }
```
 */

type RemoveIndexSignature<T extends Record<PropertyKey, unknown>> = {
  [Prop in keyof T as Prop extends `${infer _Key}` ? Prop : never]: T[Prop];
};

type Foo = {
  [key: string]: any;
  foo(): void;
};

type A = RemoveIndexSignature<Foo>;

export {};
