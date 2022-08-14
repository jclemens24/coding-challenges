/* eslint-disable no-unused-vars */
/**
 * Implement the advanced util type GetOptional<T>, which remains all the optional fields

For example
```
type I = GetOptional<{ foo: number, bar?: string }> // expected to be { bar?: string }
```
 */

type GetOptional<TObject extends object> = {
  [Key in keyof TObject as TObject[Key] extends Required<TObject>[Key]
    ? never
    : Key]: TObject[Key];
};

type I = GetOptional<{ foo: number; bar?: string }>; // expected to be { bar?: string }

// This Version I don't understand but I'm getting clarification
type GetOptionalV2<T extends object> = {
  [K in keyof T as {} extends Pick<T, K> ? K : never]: T[K];
};

type J = GetOptionalV2<{ foo: number; bar?: string }>;
