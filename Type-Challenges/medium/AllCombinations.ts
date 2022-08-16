/* eslint-disable no-unused-vars */
/**
 * Implement type AllCombinations<S> that return all combinations of strings which use characters from S at most once.

For example:
```
type AllCombinations_ABC = AllCombinations<'ABC'>;
// should be '' | 'A' | 'B' | 'C' | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB' | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'
```
 */

type AllCombinations<
  S extends string,
  U extends string = S
> = S extends `${infer F}${infer R}`
  ?
      | `${F}${AllCombinations<R>}`
      | (`${R}${F}` extends U ? U : `${AllCombinations<`${R}${F}`, U>}`)
      | AllCombinations<R>
  : S;

type AllCombinations_ABC = AllCombinations<'ABC'>;

export {};
