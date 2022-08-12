/* eslint-disable no-unused-vars */
/**
 * Implement Capitalize<T> which converts the first letter of a string to uppercase and leave the rest as-is.

For example

```
type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'
```
 */

type CapitalizeFirstLetter<S extends string> =
  S extends `${infer First}${infer Rest}`
    ? `${Capitalize<First>}${Rest}`
    : never;

type isCapitalized = CapitalizeFirstLetter<'hello world'>;
