/* eslint-disable no-unused-vars */
/**
 * Give an array, transform into an object type and the key/value must in the given array.

For example:
```
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
```
 */

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

type TupleToObject<T extends readonly PropertyKey[]> = {
  [Prop in T[number]]: Prop;
};

type Result = TupleToObject<typeof tuple>;

export {};
