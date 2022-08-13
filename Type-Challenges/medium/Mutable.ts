/* eslint-disable no-unused-vars */
/**
 * Implement the generic Mutable<T> which makes all properties in T mutable (not readonly).

For example

```
interface Todo {
  readonly title: string
  readonly description: string
  readonly completed: boolean
}

type MutableTodo = Mutable<Todo> // { title: string; description: string; completed: boolean; }
```
 */

type Mutable<T extends object> = {
  -readonly [Property in keyof T]: T[Property];
};

interface Todo {
  readonly title: string;
  readonly description: string;
  readonly completed: boolean;
}

type MutableTodo = Mutable<Todo>;

export {};
