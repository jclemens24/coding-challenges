/* eslint-disable no-unused-vars */
/**
 * Implement Replace<S, From, To> which replace the string From with To once in the given string S

For example

```
type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'
```
 */

type Replace<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer F}${From}${infer R}` ? `${F}${To}${R}` : never;

type replaced = Replace<'types are fun!', 'fun', 'awesome'>;
