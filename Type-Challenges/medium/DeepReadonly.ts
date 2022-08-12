/* eslint-disable no-unused-vars */
/**
 * Implement a generic `DeepReadonly<T>` which make every parameter of an object - and its sub-objects recursively - readonly.

You can assume that we are only dealing with Objects in this challenge. Arrays, Functions, Classes and so on do not need to be taken into consideration. However, you can still challenge yourself by covering as many different cases as possible.

For example:

```
type X = { 
  x: { 
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

type Expected = { 
  readonly x: { 
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey' 
}

type Todo = DeepReadonly<X> // should be same as `Expected`
```
 */

// Consider Recursively evaluating object passed

type DeepReadonly<T extends object> = {
  readonly [Key in keyof T]: T[Key] extends Record<string, any>
    ? DeepReadonly<T[Key]>
    : T[Key];
};

type DeepReadonlyV2<T> = {
  readonly [Prop in keyof T]: keyof T[Prop] extends never
    ? T[Prop]
    : DeepReadonlyV2<T[Prop]>;
};

type X = {
  x: {
    a: 1;
    b: 'hi';
  };
  y: 'hey';
};

type Todo = DeepReadonly<X>;
type Todo2 = DeepReadonlyV2<X>;
