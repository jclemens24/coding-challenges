/* eslint-disable no-unused-vars */
/**
 * From T, pick a set of properties whose type are not assignable to U.

For Example

```
type OmitBoolean = OmitByType<{
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}, boolean> // { name: string; count: number }
```
 */

type OmitByType<T extends object, Value extends any> = {
  [Key in keyof T as T[Key] extends Value ? never : Key]: T[Key];
};

type OmitBoolean = OmitByType<
  {
    name: string;
    count: number;
    isReadonly: boolean;
    isEnable: boolean;
  },
  boolean
>;
