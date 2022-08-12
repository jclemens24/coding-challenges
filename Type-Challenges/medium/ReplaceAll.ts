/* eslint-disable no-unused-vars */
/**
 * Implement ReplaceAll<S, From, To> which replace the all the substring From with To in the given string S

For example

```
type replaced = ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'
```
 */

type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ''
  ? S
  : S extends `${infer F}${From}${infer R}`
  ? `${F}${To}${ReplaceAll<R, From, To>}`
  : S;

type replaced = ReplaceAll<'t y p e s', ' ', ''>;

export {};
