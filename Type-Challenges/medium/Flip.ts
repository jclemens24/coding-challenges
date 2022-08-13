/* eslint-disable no-unused-vars */
/**
 * Implement the type of just-flip-object. Examples:

```
Flip<{ a: "x", b: "y", c: "z" }>; // {x: 'a', y: 'b', z: 'c'}
Flip<{ a: 1, b: 2, c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
Flip<{ a: false, b: true }>; // {false: 'a', true: 'b'}
```
 */

/* 
Note: You'll notice type c is incorrect but I am purposely ok with that. Boolean values shouldn't be held as keys. The second version will handle those Boolean types.
*/

type Flip<T extends object> = {
  [Key in keyof T as T[Key] extends PropertyKey ? T[Key] : never]: Key;
};

type FlipV2<T extends { [key: string]: string | number | boolean }> = {
  [Key in keyof T as `${T[Key]}`]: Key;
};

type a = Flip<{ a: 'x'; b: 'y'; c: 'z' }>; // {x: 'a', y: 'b', z: 'c'}
type b = Flip<{ a: 1; b: 2; c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
type c = Flip<{ a: false; b: true }>; // {false: 'a', true: 'b'}
type CV2 = FlipV2<{ a: false; b: true }>;

export {};
