/* eslint-disable no-unused-vars */
/**
 * Implement the type version of lodash's _.flip.

Type FlipArguments<T> requires function type T and returns a new function type which has the same return type of T but reversed parameters.

For example:

```
type Flipped = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void> 
// (arg0: boolean, arg1: number, arg2: string) => void
```
 */
import type { Reverse } from './Reverse';

type FlipArgs<T extends (...args: any[]) => any> = T extends (
  ...args: infer Params
) => infer R
  ? (...args: Reverse<Params>) => R
  : never;

type Flipped = FlipArgs<(arg0: string, arg1: number, arg2: boolean) => void>;
// (arg0: boolean, arg1: number, arg2: string) => void
