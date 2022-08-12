/* eslint-disable no-unused-vars */
/**
 * Implement the built-in Exclude<T, U>

Exclude from T those types that are assignable to U

For example:
```
type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
```
 */

type Exclude<T, U> = T extends U ? never : T;

type Result = Exclude<'a' | 'b' | 'c', 'a'>;

export {};
