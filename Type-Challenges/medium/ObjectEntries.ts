/* eslint-disable no-unused-vars */
/**
 * Implement the type version of Object.entries

For example

```
interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}
type modelEntries = ObjectEntries<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];
```
 */

type ObjectEnties<T extends object> = {
  [Key in keyof T]: [Key, T[Key]];
}[keyof T];

type ObjectEntiesV2<
  T extends object,
  K extends keyof T = keyof T
> = K extends unknown ? [K, T[K] extends infer F ? F : T[K]] : never;

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries = ObjectEnties<Model>;
type ModelEntries2 = ObjectEntiesV2<Model>;
