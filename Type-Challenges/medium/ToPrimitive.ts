/* eslint-disable no-unused-vars */
/**
 * Convert a property of type literal (label type) to a primitive type.

For example

```typescript
type X = {
  name: 'Tom',
  age: 30,
  married: false,
  addr: {
    home: '123456',
    phone: '13111111111'
  }
}

type Expected = {
  name: string,
  age: number,
  married: boolean,
  addr: {
    home: string,
    phone: string
  }
}
type Todo = ToPrimitive<X> // should be same as `Expected`
```
 */
import type { Expect, Equal } from '@type-challenges/utils';

type ToPrimitive<T extends Record<PropertyKey, any>> = {
  [Key in keyof T]: T[Key] extends string
    ? string
    : T[Key] extends number
    ? number
    : T[Key] extends unknown[]
    ? ToPrimitive<T[Key]>
    : T[Key] extends Record<keyof any, any>
    ? ToPrimitive<T[Key]>
    : T[Key] extends boolean
    ? boolean
    : never;
};

type ToPrimitive2<T> = T extends string
  ? string
  : T extends number
  ? number
  : T extends boolean
  ? boolean
  : T extends bigint
  ? bigint
  : T extends symbol
  ? symbol
  : T extends [infer F, ...infer R]
  ? [ToPrimitive2<F>, ...ToPrimitive2<R>]
  : T extends Record<PropertyKey, any>
  ? { [K in keyof T]: ToPrimitive2<T[K]> }
  : T;

type PersonInfo = {
  name: 'Tom';
  age: 30;
  married: false;
  addr: {
    home: '123456';
    phone: '13111111111';
  };
  hobbies: ['sing', 'dance'];
};

type ExpectedResult = {
  name: string;
  age: number;
  married: boolean;
  addr: {
    home: string;
    phone: string;
  };
  hobbies: [string, string];
};

type Cases = [
  Expect<Equal<ToPrimitive<PersonInfo>, ExpectedResult>>,
  Expect<Equal<ToPrimitive2<PersonInfo>, ExpectedResult>>
];
