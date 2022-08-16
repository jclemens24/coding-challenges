/* eslint-disable no-unused-vars */
/**
 * In This Challenge, You should implement a type GreaterThan<T, U> like T > U

Negative numbers do not need to be considered.

For example
```
GreaterThan<2, 1> //should be true
GreaterThan<1, 1> //should be false
GreaterThan<10, 100> //should be false
GreaterThan<111, 11> //should be true
```
Good Luck!
 */

type GreaterThan<
  LeftNum extends number,
  RightNum extends number,
  L extends readonly unknown[] = []
> = LeftNum extends RightNum
  ? false
  : L['length'] extends LeftNum
  ? false
  : L['length'] extends RightNum
  ? true
  : GreaterThan<LeftNum, RightNum, [...L, unknown]>;

type Result = GreaterThan<2, 1>;
type Result2 = GreaterThan<1, 1>;
type Result3 = GreaterThan<1000, 1000>;
type Result4 = GreaterThan<10, 1000000>;
type Result5 = GreaterThan<500, 499>;
type Result6 = GreaterThan<10000000000, 10>;

export {};
