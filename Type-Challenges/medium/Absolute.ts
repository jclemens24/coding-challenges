/* eslint-disable no-unused-vars */
/**
 * Implement the Absolute type. A type that take string, number or bigint. The output should be a positive number string

For example

```
type Test = -100;
type Result = Absolute<Test>; // expected to be "100"
```
 */

type Absolute<Integer extends string | number | bigint> =
  `${Integer}` extends `-${infer Num}` ? Num : `${Integer}`;

type Test = -100;
type Test2 = -5000n;
type Result = Absolute<Test>;
type Result2 = Absolute<Test2>;

export {};
