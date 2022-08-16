/* eslint-disable no-unused-vars */
/**
 * Chainable options are commonly used in Javascript. But when we switch to TypeScript, can you properly type it?

In this challenge, you need to type an object or a class - whatever you like - to provide two function `option(key, value)` and `get()`. In option, you can extend the current config type by the given key and value. We should about to access the final result via get.

For example:
```
declare const config: Chainable

const result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()

// expect the type of result to be:
interface Result {
  foo: number
  name: string
  bar: {
    value: string
  }
}
```
 */

type Chainable<T extends object = {}> = {
  option<Key extends PropertyKey, Value>(
    key: Key extends keyof T ? never : Key,
    value: Value
  ): Chainable<T & Record<Key, Value>>;
  get(): T;
};

type ChainableV2<T = {}> = {
  option<K extends string | number | symbol, V extends unknown>(
    key: K extends keyof T ? never : K,
    value: V
  ): ChainableV2<T & { [Prop in K]: V }>;
  get(): T;
};

// declare const config: Chainable;

// const result = config
//   .option('foo', 123)
//   .option('name', 'type-challenges')
//   .option('bar', { value: 'hello world' })
//   .get();

// declare const config2: ChainableV2;

// const result2 = config2
//   .option(42, 'forty-two')
//   .option('name', 'Jordan')
//   .option('color', 'blue')
//   .get();

type PropEventSource<Type> = {
  on<Key extends string & keyof Type>(
    eventName: `${Key}Changed`,
    callback: (newValue: Type[Key]) => void
  ): void;
};

// declare function makeWatchedObject<Type>(
//   obj: Type
// ): Type & PropEventSource<Type>;

function makeWatchedObject<Type extends object>(
  obj: Type
): Type & PropEventSource<Type> {
  const newObj = Object.assign(
    obj,
    <PropEventSource<typeof obj>>(<unknown>obj)
  );
  return newObj;
}

const person = makeWatchedObject({
  firstName: 'Saoirse',
  lastName: 'Ronan',
  age: 26
});

const addOn: PropEventSource<typeof person> = {
  on(eventName, callback) {}
};

person.on('firstNameChanged', (newName) => {
  console.log(`new name is ${newName.toUpperCase()}`);
});

person.on('ageChanged', (newAge) => {
  if (newAge < 0) {
    console.warn('warning! negative age');
  }
});

console.log(person);
