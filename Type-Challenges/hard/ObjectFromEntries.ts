/* eslint-disable no-unused-vars */

type ObjectFromEntries<T extends [key: string, value: unknown]> = {
  [Key in T[0]]: Extract<T, [Key, unknown]>[1];
};

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries =
  | ['name', string]
  | ['age', number]
  | ['locations', string[] | null];

type Case1 = ObjectFromEntries<ModelEntries>;

export {};
