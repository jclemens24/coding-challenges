/* eslint-disable no-unused-vars */
/**
 * Implement the built-in Pick<T, K> generic without using it.

Constructs a type by picking the set of properties K from T

For example:
```
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}
```
 */

interface ToDo {
  title: string;
  description: string;
  completed: boolean;
}

type MyPick<T, K extends keyof T> = {
  [Key in K]: T[Key];
};

type ToDoPreview = MyPick<ToDo, 'completed' | 'title'>;
const todo: ToDoPreview = {
  title: 'Clean My Room',
  completed: false
};

export {};
