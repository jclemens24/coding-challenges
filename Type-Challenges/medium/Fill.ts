/* eslint-disable no-unused-vars */
/**
 * `Fill`, a common JavaScript function, now let us implement it with types. `Fill<T, N, Start?, End?>`, as you can see, `Fill` accepts four types of parameters, of which `T` and `N` are required parameters, and `Start` and `End` are optional parameters. The requirements for these parameters are: `T` must be a tuple, `N` can be any type of value, `Start` and `End` must be integers greater than or equal to 0.

```
type exp = Fill<[1, 2, 3], 0> // expected to be [0, 0, 0]
```
In order to simulate the real function, the test may contain some boundary conditions, I hope you can enjoy it :)
 */

type Fill<
  TTuple extends unknown[],
  N extends any,
  Start extends number = 0,
  End extends number = TTuple['length'],
  Result extends unknown[] = [],
  RangeMarker = false
> = TTuple extends [infer F, ...infer R]
  ? End extends Result['length']
    ? TTuple
    : Start extends Result['length']
    ? [N, ...Fill<R, N, Start, End, [...Result, 1], true>]
    : RangeMarker extends true
    ? [N, ...Fill<R, N, Start, End, [...Result, 1], true>]
    : [F, ...Fill<R, N, Start, End, [...Result, 1]>]
  : [];

type exp = Fill<[1, 2, 3], 0>;
type exp2 = Fill<[1, 2, 3, 4, 5, 6, 7], 2, 4>;

function fill<T extends unknown[], N extends any>(
  array: T,
  n: N,
  Start: number = 0,
  End: number = array.length,
  Result: any[] = [],
  RangeMarker: boolean = false
): Array<T[0]> {
  if (array.length === 0) return array;
  const [First, ...Rest] = array;
  return Result.length === End
    ? array
    : Start === Result.length
    ? [n, ...fill(Rest, n, Start, End, [...Result, 1], true)]
    : RangeMarker === true
    ? [n, ...fill(Rest, n, Start, End, [...Result, 1], true)]
    : [First, ...fill(Rest, n, Start, End, [...Result, 1])];
}

const check = fill([1, 2, 3], 0);
console.log(check);
const check2 = fill([4, 5, 9, 8, 10, 14], 1, 3);
console.log(check2);
const arr = ['jordan', 'michael', 1];
const check3 = fill(arr, 'clemens', 2, 3);
console.log(check3);
