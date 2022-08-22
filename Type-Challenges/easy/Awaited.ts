/* eslint-disable no-unused-vars */
/**
 * If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type?

For example: if we have Promise<ExampleType> how to get ExampleType?

```
type ExampleType = Promise<string>

type Result = MyAwaited<ExampleType> // string
```
 */
type Awaited<T> = T extends null | undefined
  ? T
  : T extends object & { then(onfulfilled: infer F): any }
  ? F extends (value: infer ReturnValue, ...args: any) => any
    ? Awaited<ReturnValue>
    : never
  : T;

type AwaitedV2<T> = T extends Promise<infer R>
  ? R extends Promise<any>
    ? AwaitedV2<R>
    : R
  : never;

type ExampleType = Awaited<Promise<string>>;
type ExampleType2 = AwaitedV2<Promise<number>>;

export {};
