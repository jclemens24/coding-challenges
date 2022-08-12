/* eslint-disable no-unused-vars */
/**
 * For given function type Fn, and any type A (any in this context means we don't restrict the type, and I don't have in mind any type 😉) create a generic type which will take Fn as the first argument, A as the second, and will produce function type G which will be the same as Fn but with appended argument A as a last one.

For example,

```
type Fn = (a: number, b: string) => number

type Result = AppendArgument<Fn, boolean> 
// expected be (a: number, b: string, x: boolean) => number
```
 */

type AppendArgument<
  Func extends (...args: any[]) => any,
  ExtraArg extends unknown = any
> = Func extends (...args: infer Params) => infer ReturnType
  ? (...args: [...Params, ExtraArg]) => ReturnType
  : Func;

type Fn = (a: number, b: string) => number;

type Result = AppendArgument<Fn, bigint>;
type Result2 = AppendArgument<Fn>;

export {};
