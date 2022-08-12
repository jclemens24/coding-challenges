/* eslint-disable no-unused-vars */
/**
 * Get an Object that is the difference between O & O1
 */

type Diff<TObject extends object, UObject extends object> = {
  [K in keyof TObject as K extends keyof UObject ? never : K]: TObject[K];
} & {
  [P in keyof UObject as P extends keyof TObject ? never : P]: UObject[P];
} extends infer O
  ? {
      [Prop in keyof O]: O[Prop];
    }
  : never;

type O = {
  school: 'Penn State';
  major: 'Computer Sciences';
};

type O1 = {
  gpa: 3.4;
  studentName: 'Jordan Clemens';
  school: 'Penn State';
};

type DiffOAndO1 = Diff<O, O1>;

// Excludes 'school' from Combined Object

// Personally, I Don't like intersecting and I can do this better. This version feels really clean to me.

/*
Edit: Comment above may not make sense now as I changed Version1 Diff to infer O and then Map those Properties to the value. This makes the Editor show the Type as one object instead of {} & {} 
*/

type DiffV2<
  T extends Record<PropertyKey, unknown>,
  U extends Record<PropertyKey, unknown>
> = {
  [Key in keyof Omit<T & U, keyof (T | U)>]: Key extends keyof T
    ? T[Key]
    : U[Key];
};

type DiffOAndO1V2 = DiffV2<O, O1>;
