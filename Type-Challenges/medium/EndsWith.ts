/* eslint-disable no-unused-vars */
/**
 * Implement EndsWith<T, U> which takes two exact string types and returns whether T ends with U

For example:

```
type a = EndsWith<'abc', 'bc'> // expected to be true
type b = EndsWith<'abc', 'abc'> // expected to be true
type c = EndsWith<'abc', 'd'> // expected to be false
```
 */

type EndsWith<
  TString extends string,
  UString extends string
> = TString extends `${string}${UString}` ? true : false;

type EndsWithV2<
  T extends string,
  U extends string
> = T extends `${infer _Char}${U}` ? true : false;

type a = EndsWith<'abc', 'bc'>; // expected to be true
type b = EndsWith<'abc', 'abc'>; // expected to be true
type c = EndsWith<'abc', 'd'>; // expected to be false

type aa = EndsWithV2<'abc', 'bc'>;
export {};
