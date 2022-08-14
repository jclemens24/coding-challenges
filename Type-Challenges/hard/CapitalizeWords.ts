/* eslint-disable no-unused-vars */
/**
 * Implement CapitalizeWords<T> which converts the first letter of each word of a string to uppercase and leaves the rest as-is.

For example

```
type capitalized = CapitalizeWords<'hello world, my friends'> // expected to be 'Hello World, My Friends'
```
 */

type CapitalizeWords<
  S extends string,
  Switch = true
> = S extends `${infer F}${infer _R}`
  ? `${Switch extends true ? Capitalize<F> : F}${CapitalizeWords<
      F extends ' ' | '.' | ',' ? Capitalize<_R> : _R,
      false
    >}`
  : S;

type capitalized = CapitalizeWords<'hello world, my friends'>; // expected to be 'Hello World, My Friends'

type Markers = ' ';
type UppercaseFirst<T> = T extends `${infer F}${infer R}`
  ? `${Uppercase<F>}${R}`
  : T;

type CapitalizeWordsV2<T extends string> = T extends `${infer F}${infer R}`
  ? `${UppercaseFirst<F>}${Markers}${CapitalizeWordsV2<R>}`
  : UppercaseFirst<T>;

type capitalized2 = CapitalizeWordsV2<'hello world, my friends'>;
