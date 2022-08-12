/* eslint-disable no-unused-vars */
/**
 * Type the function PromiseAll that accepts an array of PromiseLike objects, the returning value should be Promise<T> where T is the resolved result array.

```
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

// expected to be `Promise<[number, 42, string]>`
const p = PromiseAll([promise1, promise2, promise3] as const)
```
 */

declare function PromiseAll<T extends unknown[]>(
  values: readonly [...T]
): Promise<{ [K in keyof T]: T[K] extends Promise<infer R> ? R : T[K] }>;

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

const p = Promise.all([promise1, promise2, promise3] as const);
const p1 = PromiseAll([promise1, promise2, promise3] as const);
