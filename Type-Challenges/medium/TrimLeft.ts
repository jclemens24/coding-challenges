/* eslint-disable no-unused-vars */
/**
 * Implement TrimLeft<T> which takes an exact string type and returns a new string with the whitespace beginning removed.

For example

```
type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '
```
 */

type TrimLeft<S extends string> = S extends `${infer Left}${infer Right}`
  ? Left extends ' ' | '\n' | '\t'
    ? TrimLeft<Right>
    : S
  : never;

type trimmed = TrimLeft<'   Hello World  '>;
