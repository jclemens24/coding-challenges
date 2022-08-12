/// <reference types="node" />

/* eslint-disable no-unused-vars */
/**
 * Implement Trim<T> which takes an exact string type and returns a new string with the whitespace from both ends removed.

For example

```
type trimmed = Trim<'  Hello World  '> // expected to be 'Hello World'
```
 */

type Trim<S extends string> = S extends `${' ' | '\n' | '\t'}${infer Start}`
  ? Trim<Start>
  : S extends `${infer End}${' ' | '\n' | '\t'}`
  ? Trim<End>
  : S;

type trimmed = Trim<'   Hello World   '>;

export {};
