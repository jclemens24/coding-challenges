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

export {};

type NumberRange<
  From extends number,
  To extends number,
  Res extends unknown[] = [],
  Start extends readonly unknown[] = [],
  End extends readonly unknown[] = []
> = End['length'] extends To
  ? [...Res, End['length']][number]
  : Start['length'] extends From
  ? NumberRange<From, To, [...Res, End['length']], Start, [...End, unknown]>
  : NumberRange<From, To, Res, [...Start, any], [...End, any]>;

type result = NumberRange<2, 9>; //  | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
