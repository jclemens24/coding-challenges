/* eslint-disable no-unused-vars */
/**
 * Implement the built-in Parameters generic without using it.

For example:

```
const foo = (arg1: string, arg2: number): void => {}

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]
```
 */

type Parameters<Func extends (...args: any[]) => any> = Func extends (
  ...args: infer Args
) => any
  ? Args
  : never;

export {};

const foo = (arg1: string, arg2: number): void => {};

type FooParamsType = Parameters<typeof foo>;
