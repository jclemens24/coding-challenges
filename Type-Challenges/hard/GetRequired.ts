/* eslint-disable no-unused-vars */
/**
 * Implement the advanced util type GetRequired<T>, which remains all the required fields

For example
```
type I = GetRequired<{ foo: number, bar?: string }> // expected to be { foo: number }
```
 */

type GetRequired<T extends object> = {
  [Key in keyof T as T[Key] extends Required<T>[Key] ? Key : never]: T[Key];
};

type I = GetRequired<{ foo: number; bar?: string }>; // expected to be { foo: number }

export {};
