/* eslint-disable no-unused-vars */
/**
 * Currying is the technique of converting a function that takes multiple arguments into a sequence of functions that each take a single argument.

For example:

```
const add = (a: number, b: number) => a + b
const three = add(1, 2)

const curriedAdd = Currying(add)
const five = curriedAdd(2)(3)
```

The function passed to Currying may have multiple arguments, you need to correctly type it.

In this challenge, the curried function only accept one argument at a time. Once all the argument is assigned, it should return its result.
 */

type Curried<T> = T extends (...args: infer Params) => infer R
  ? Params extends [infer FirstParam, ...infer RestParams]
    ? (arg: FirstParam) => Curried<(...args: RestParams) => R>
    : R
  : never;

declare function Currying<T>(fn: T): Curried<T>;

const add = (a: number, b: number) => a + b;
const curriedAdd = Currying(add);
const five = curriedAdd(2)(3);
const curried1 = Currying((a: string, b: number, c: boolean) => true);

type ClassType<T> = {
  new (...args: any[]): T;
};

enum ItemStatuses {
  Started = 'Started',
  Pending = 'Pending',
  Finished = 'Finished'
}

interface Item {
  status: ItemStatuses;
}

const saveItem = async <T extends Item>(
  data: T,
  classType: ClassType<T>
): Promise<void> => {
  await update<Item>(classType, { status: ItemStatuses.Finished });
};

const update = async <T extends Item>(
  classType: ClassType<T>,
  data: Partial<T>
): Promise<void> => {
  console.log(classType);
  if (data.status !== undefined) {
    console.log(data.status);
  }
};

const item: Item = {
  status: ItemStatuses.Started
};
