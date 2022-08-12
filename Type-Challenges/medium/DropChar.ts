/* eslint-disable no-unused-vars */
/**
 * Drop a specified char from a string.

For example:

```
type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'
```
 */

type DropChar<
  Str extends string,
  Replacer extends string
> = Str extends `${infer First}${infer Next}`
  ? First extends Replacer
    ? DropChar<Next, Replacer>
    : `${First}${DropChar<Next, Replacer>}`
  : Str;

type Butterfly = DropChar<' b u t t e r f l y ! ', ' '>; // 'butterfly!'
