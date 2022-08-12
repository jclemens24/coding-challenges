/* eslint-disable no-unused-vars */
/**
 * Implement the built-in Omit<T, K> generic without using it.

Constructs a type by picking all properties from T and then removing K

For example:

```
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}
```
 */

type MyOmit<T extends object, K extends PropertyKey> = {
  [Key in keyof T as Key extends K ? never : Key]: T[Key];
};

type MyOmitV2<T extends object, K extends string | number | symbol> = {
  [Prop in Exclude<keyof T, K>]: T[Prop];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>;

const todo: TodoPreview = {
  completed: false
};

type TodoPreviewV2 = MyOmitV2<Todo, 'completed'>;

const todo2: TodoPreviewV2 = {
  title: "It works! Autocompletion omits field 'completed'",
  description: 'Omit fields from Todo Object'
};

export {};
