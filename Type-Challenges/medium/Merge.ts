/* eslint-disable no-unused-vars */
/**
 * Merge two types into a new type. Keys of the second type overrides keys of the first type.

For example

```
type foo = {
  name: string;
  age: string;
}
type coo = {
  age: number;
  sex: string
}

type Result = Merge<foo,coo>; // expected to be {name: string, age: number, sex: string}
```
 */

type MergeObjects<T extends object, O extends object> = {
  [Key in keyof T | keyof O]: Key extends keyof O
    ? O[Key]
    : Key extends keyof T
    ? T[Key]
    : never;
};

type foo = {
  name: string;
  age: string;
};
type coo = {
  age: number;
  sex: string;
};

type Result = MergeObjects<foo, coo>;

export {};
