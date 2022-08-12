/* eslint-disable no-unused-vars */
/**
 * Implement a generic MyReadonly2<T, K> which takes two type argument T and K.

`K` specify the set of properties of T that should set to Readonly. When `K` is not provided, it should make all properties readonly just like the normal `Readonly<T>`.

For example:

```
interface Todo {
  title: string
  description: string
  completed: boolean
}

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK
```
 */

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type Readonly2<T extends object, K extends keyof T = keyof T> = {
  +readonly [Key in K]: T[Key];
} & {
  [Key in keyof T as Key extends K ? never : Key]: T[Key];
};

const todo: Readonly2<Todo, 'title' | 'description'> = {
  title: 'Hello',
  description: 'foobar',
  completed: false
};

// @ts-expect-error
todo.title = 'Hey'; // Is readonly, error
// @ts-expect-error
todo.description = 'barFoo'; // Is readonly, error

todo.completed = true; // OK

// Testing Passing no K to Readonly2
// Should make all properties readonly

const todo2: Readonly2<Todo> = {
  title: 'Test2',
  description: 'All props should be readonly and immutable',
  completed: true
};

// @ts-expect-error
todo2.completed = false;
// @ts-expect-error
todo2.title = 'test1';
// @ts-expect-error
todo2.description = "Can't change me!";

export {};
