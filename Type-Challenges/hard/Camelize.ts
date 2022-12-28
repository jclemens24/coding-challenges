/* eslint-disable no-unused-vars */
import type { Equal, Expect } from '@type-challenges/utils';

/**
 * Implement Camelize which converts object from snake_case to to camelCase

```
Camelize<{
  some_prop: string, 
  prop: { another_prop: string },
  array: [{ snake_case: string }]
}>

// expected to be
// {
//   someProp: string, 
//   prop: { anotherProp: string },
//   array: [{ snakeCase: string }]
// }
```
 */

type CamelizeHandler<Prop> =
  Prop extends `${infer Head}_${infer Middle}${infer Rest}`
    ? `${Head}${Uppercase<Middle>}${CamelizeHandler<Rest>}`
    : Prop;

type Camelize<T> = T extends Record<string, unknown>
  ? {
      [K in keyof T as CamelizeHandler<K>]: Camelize<T[K]>;
    }
  : T extends [infer First, ...infer Rest]
  ? [Camelize<First>, ...Camelize<Rest>]
  : T;

type case1 = Camelize<{
  some_prop: string;
  prop: { another_prop: string };
  array: [
    { snake_case: string },
    { another_element: { yet_another_prop: string } },
    { yet_another_element: string }
  ];
}>;

type cases = [
  Expect<
    Equal<
      Camelize<{
        some_prop: string;
        prop: { another_prop: string };
        array: [
          { snake_case: string },
          { another_element: { yet_another_prop: string } },
          { yet_another_element: string }
        ];
      }>,
      {
        someProp: string;
        prop: { anotherProp: string };
        array: [
          { snakeCase: string },
          { anotherElement: { yetAnotherProp: string } },
          { yetAnotherElement: string }
        ];
      }
    >
  >
];

export {};
