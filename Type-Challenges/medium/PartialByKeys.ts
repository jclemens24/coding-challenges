/* eslint-disable no-unused-vars */
/**
 * Implement a generic `PartialByKeys<T, K>` which takes two type argument T and K.

`K` specify the set of properties of T that should set to be optional. When K is not provided, it should make all properties optional just like the normal Partial<T>.

For example

```
interface User {
  name: string
  age: number
  address: string
}

type UserPartialName = PartialByKeys<User, 'name'> // { name?:string; age:number; address:string }
```
 */

type PartialByKeys<T extends object, K extends keyof T = keyof T> = {
  [Prop in keyof T as Prop extends K ? Prop : never]+?: T[Prop];
} & {
  [Prop in keyof T as Prop extends K ? never : Prop]: T[Prop];
} extends infer O
  ? {
      [Prop in keyof O]: O[Prop];
    }
  : never;

interface User {
  name: string;
  age: number;
  address: string;
}

type UserPartialName = PartialByKeys<User, 'name'>;
type UserPartialAll = PartialByKeys<User>;

export {};
