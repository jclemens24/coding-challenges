/* eslint-disable no-unused-vars */
/**
 * Implement the advanced util type RequiredKeys<T>, which picks all the required keys into a union.

For example
```
type Result = RequiredKeys<{ foo: number; bar?: string }>;
// expected to be “foo”
```
 */

type RequiredKeys<
  T extends object,
  K extends keyof T = keyof T
> = K extends keyof T ? (T[K] extends Required<T>[K] ? K : never) : never;

type Result = RequiredKeys<{ foo: number; bar?: string; baz: string }>;

type RequiredKeysV2<T extends object> = keyof {
  [K in keyof T as Pick<T, K> extends Required<Pick<T, K>> ? K : never]: T[K];
};

type ResultV2 = RequiredKeysV2<{
  age?: number;
  name: string;
  major: string;
  address: string;
}>;

export {};
