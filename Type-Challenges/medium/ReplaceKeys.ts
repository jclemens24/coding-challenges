/* eslint-disable no-unused-vars */
/**
 * Implement a type ReplaceKeys, that replace keys in union types, if some type has not this key, just skip replacing, A type takes three arguments.

For example:

```
type NodeA = {
  type: 'A'
  name: string
  flag: number
}

type NodeB = {
  type: 'B'
  id: number
  flag: number
}

type NodeC = {
  type: 'C'
  name: string
  flag: number
}


type Nodes = NodeA | NodeB | NodeC

type ReplacedNodes = ReplaceKeys<Nodes, 'name' | 'flag', {name: number, flag: string}> // {type: 'A', name: number, flag: string} | {type: 'B', id: number, flag: string} | {type: 'C', name: number, flag: string} // would replace name from string to number, replace flag from number to string.

type ReplacedNotExistKeys = ReplaceKeys<Nodes, 'name', {aa: number}> // {type: 'A', name: never, flag: number} | NodeB | {type: 'C', name: never, flag: number} // would replace name to never
```
 */

type ReplaceKeys<
  TObject extends object,
  K extends keyof any,
  NewTypes extends Record<keyof any, unknown>
> = TObject extends TObject
  ? {
      [Property in keyof TObject]: Property extends K
        ? Property extends keyof NewTypes
          ? NewTypes[Property]
          : never
        : TObject[Property];
    }
  : never;

type NodeA = {
  type: 'A';
  name: string;
  flag: number;
};

type NodeB = {
  type: 'B';
  id: number;
  flag: number;
};

type NodeC = {
  type: 'C';
  name: string;
  flag: number;
};

type Nodes = NodeA | NodeB | NodeC;

type ReplacedNodes = ReplaceKeys<
  Nodes,
  'name' | 'flag',
  { name: number; flag: string }
>;
