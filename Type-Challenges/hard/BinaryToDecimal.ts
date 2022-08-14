/* eslint-disable no-unused-vars */
/**
 * Implement BinaryToDecimal<S> which takes an exact string type S consisting 0 and 1 and returns an exact number type corresponding with S when S is regarded as a binary. You can assume that the length of S is equal to or less than 8 and S is not empty.
```
type Res1 = BinaryToDecimal<'10'>; // expected to be 2
type Res2 = BinaryToDecimal<'0011'>; // expected to be 3
```
 */

type BinaryToDecimal<
  S extends string,
  Bin extends readonly unknown[] = []
> = S extends `${infer Left}${infer Rest}`
  ? Left extends '0'
    ? BinaryToDecimal<Rest, [...Bin, ...Bin]>
    : BinaryToDecimal<Rest, [...Bin, ...Bin, 1]>
  : Bin['length'];

type Res1 = BinaryToDecimal<'10'>; // expected to be 2
type Res2 = BinaryToDecimal<'0011'>; // expected to be 3
