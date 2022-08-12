/* eslint-disable no-unused-vars */
/**
 * Implement a type that adds a new field to the interface. The type takes the three arguments. The output should be an object with the new field.

For example

```
type Test = { id: '1' }
type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }
```
 */

type AppendToObject<
  TObject extends object,
  Key extends PropertyKey,
  Value extends unknown
> = {
  [Property in keyof TObject | Key]: Property extends keyof TObject
    ? TObject[Property]
    : Value;
};

type Test = { id: 1 };
type Result = AppendToObject<Test, 'value', 4>;

export {};
