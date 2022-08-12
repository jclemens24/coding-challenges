/* eslint-disable no-unused-vars */
/**
 * Implement the generic version of Array.push

For example:
```
type Result = Push<[1, 2], '3'> // [1, 2, '3']
```
 */

type Push<Arr extends readonly unknown[], Item> = [...Arr, Item];

type Result = Push<[1, 2], 3>;

export {};
