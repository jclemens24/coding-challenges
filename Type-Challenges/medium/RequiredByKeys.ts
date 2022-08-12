/* eslint-disable no-unused-vars */
/**
 * Implement a generic `RequiredByKeys<T, K>` which takes two type argument `T` and `K`.

`K` specify the set of properties of `T` that should set to be required. When K is not provided, it should make all properties required just like the normal `Required<T>`.

For example

```
interface User {
  name?: string
  age?: number
  address?: string
}

type UserRequiredName = RequiredByKeys<User, 'name'> // { name: string; age?: number; address?: string }
```
 */

type RequiredByKeys<
  TObject extends object,
  K extends keyof TObject = keyof TObject
> = {
  [Prop in keyof TObject as Prop extends K ? Prop : never]-?: TObject[Prop];
} & {
  [Prop in keyof TObject as Prop extends K ? never : Prop]: TObject[Prop];
} extends infer O
  ? {
      [Prop in keyof O]: O[Prop];
    }
  : never;

interface User {
  name?: string;
  age?: number;
  address?: string;
}

type UserRequiredName = RequiredByKeys<User, 'name'>; // { name: string; age?: number; address?: string }
type UserRequiredAll = RequiredByKeys<User>;
type UserRequiredNameAndAge = RequiredByKeys<User, 'name' | 'age'>;
type RequiredUserAddress = RequiredByKeys<User, 'address'>;
