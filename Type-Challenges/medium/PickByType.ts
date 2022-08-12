/* eslint-disable no-unused-vars */
/**
 * From T, pick a set of properties whose type are assignable to U.

For Example

```
type OnlyBoolean = PickByType<{
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}, boolean> // { isReadonly: boolean; isEnable: boolean; }
```
 */

type PickByType<TObject extends object, K extends any> = {
  [Prop in keyof TObject as TObject[Prop] extends K ? Prop : never]: K;
};

type OnlyBoolean = PickByType<
  {
    name: string;
    count: number;
    isReadOnly: boolean;
    isEnable: boolean;
  },
  boolean
>;
