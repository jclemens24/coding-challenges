/* eslint-disable no-unused-vars */
/**
 * The `get` function in lodash is a quite convenient helper for accessing nested values in JavaScript. However, when we come to TypeScript, using functions like this will make you lose the type information. With TS 4.1's upcoming Template Literal Types feature, properly typing get becomes possible. Can you implement it?

For example,
```
type Data = {
  foo: {
    bar: {
      value: 'foobar',
      count: 6,
    },
    included: true,
  },
  hello: 'world'
}
  
type A = Get<Data, 'hello'> // 'world'
type B = Get<Data, 'foo.bar.count'> // 6
type C = Get<Data, 'foo.bar'> // { value: 'foobar', count: 6 }
```
Accessing arrays is not required in this challenge.
 */

type TypedGet<TObject, TKey> = TKey extends keyof TObject
  ? TObject[TKey]
  : TKey extends `${infer Prop}.${infer Nested}`
  ? Prop extends keyof TObject
    ? TypedGet<TObject[Prop], Nested>
    : never
  : never;

type Data = {
  foo: {
    bar: {
      value: 'foobar';
      count: 6;
    };
    included: true;
  };
  hello: 'world';
};

type A = TypedGet<Data, 'hello'>; // 'world'
type B = TypedGet<Data, 'foo.bar.count'>; // 6
type C = TypedGet<Data, 'foo.bar'>; // { value: 'foobar', count: 6 }

export {};
