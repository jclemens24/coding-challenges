/* eslint-disable no-unused-vars */
/**
 * Implement `CamelCase<T>` which converts `snake_case` string to `camelCase`.

For example
```
type camelCase1 = CamelCase<'hello_world_with_types'> // expected to be 'helloWorldWithTypes'
type camelCase2 = CamelCase<'HELLO_WORLD_WITH_TYPES'> // expected to be same as previous one
```
 */

type CamelCase<
  Str extends string,
  Result extends string = ''
> = Str extends `${infer F}_${infer N}${infer L}`
  ? CamelCase<L, `${Result}${Lowercase<F>}${Uppercase<N>}`>
  : `${Result}${Lowercase<Str>}`;

type camelCase1 = CamelCase<'hello_world_with_types'>; // expected to be 'helloWorldWithTypes'
type camelCase2 = CamelCase<'HELLO_WORLD_WITH_TYPES'>; // expected to be same as previous one

type CamelCaseV2<S extends string> = S extends `${infer F}_${infer R}`
  ? `${Lowercase<F>}${CamelCaseV2<Capitalize<R>>}`
  : Lowercase<S>;

type camelCase3 = CamelCaseV2<'HELLO_WORLD_WITH_TYPES'>; // expected to be same as previous one
