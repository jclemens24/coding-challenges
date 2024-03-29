/* eslint-disable no-unused-vars */
/**
 * Implement the built-in ReturnType<T> generic without using it.

For example

```
const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

type a = MyReturnType<typeof fn> // should be "1 | 2"
```
 */

type MyReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : never;

const fn = (v: boolean) => {
  if (v) return 1;
  else {
    return 2;
  }
};

type fnReturnType = MyReturnType<typeof fn>;
