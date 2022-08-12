/* eslint-disable no-unused-vars */
/**
 * Given a number (always positive) as a type. Your type should return the number decreased by one.

For example:

```
type Zero = MinusOne<1> // 0
type FiftyFour = MinusOne<55> // 54
```
 */

type MinusOne<Num extends number, Min1 extends unknown[] = []> = [
  1,
  ...Min1
]['length'] extends Num
  ? Min1['length']
  : [1, 1, ...Min1]['length'] extends Num
  ? [1, ...Min1]['length']
  : MinusOne<Num, [1, 1, ...Min1]>;

type Zero = MinusOne<1>; // 0
type FiftyFour = MinusOne<55>; // 54

export {};
