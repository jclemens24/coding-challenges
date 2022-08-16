/* eslint-disable no-unused-vars */
/**
 * The well known split() method splits a string into an array of substrings by looking for a separator, and returns the new array. The goal of this challenge is to split a string, by using a separator, but in the type system!

For example:

```
type result = Split<'Hi! How are you?', ' '>  // should be ['Hi!', 'How', 'are', 'you?']
```
 */
import type { Expect, Equal } from '@type-challenges/utils';

type Split<
  Str extends string,
  Separator extends string,
  Result extends unknown[] = []
> = Str extends `${infer F}${Separator}${infer R}`
  ? Split<R, Separator, [...Result, F]>
  : Str extends `${infer Last}`
  ? [...Result, Last]
  : Result;

type result = Split<'Hi! How are you?', ' '>;
type result2 = Split<'Jordan\nMichael\nClemens', '\n'>;
type result3 = Split<'JavaScript\tProgramming', '\t'>;

type SplitV2<
  Str extends string,
  Separator extends string,
  Result extends readonly unknown[] = []
> = string extends Str
  ? string[]
  : Str extends Separator
  ? Result
  : Str extends `${infer F}${Separator}${infer L}`
  ? SplitV2<L, Separator, [...Result, F]>
  : [...Result, Str];

type cases = [
  Expect<Equal<SplitV2<'Hi! How are you?', ' '>, ['Hi!', 'How', 'are', 'you?']>>
];
export {};
