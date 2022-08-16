/* eslint-disable no-unused-vars */
/**
 * Implement `MapTypes<T, R>` which will transform types in object T to different types defined by type `R` which has the following structure
```
type StringToNumber = {
  mapFrom: string; // value of key which value is string
  mapTo: number; // will be transformed for number
}
```
Examples:
```
type StringToNumber = { mapFrom: string; mapTo: number;}
MapTypes<{iWillBeANumberOneDay: string}, StringToNumber> // gives { iWillBeANumberOneDay: number; }
```
Be aware that user can provide a union of types:

```
type StringToNumber = { mapFrom: string; mapTo: number;}
type StringToDate = { mapFrom: string; mapTo: Date;}
MapTypes<{iWillBeNumberOrDate: string}, StringToDate | StringToNumber> // gives { iWillBeNumberOrDate: number | Date; }
```
If the type doesn't exist in our map, leave it as it was:
```
type StringToNumber = { mapFrom: string; mapTo: number;}
MapTypes<{iWillBeANumberOneDay: string, iWillStayTheSame: Function}, StringToNumber> // // gives { iWillBeANumberOneDay: number, iWillStayTheSame: Function }
```

 */

type MapTypes<
  T extends Record<PropertyKey, unknown>,
  R extends Record<'mapFrom' | 'mapTo', unknown>
> = {
  [Key in keyof T]: [T[Key]] extends [R['mapFrom']]
    ? R extends { mapFrom: T[Key] }
      ? R['mapTo']
      : never
    : T[Key];
};

type StringToNumber = {
  mapFrom: string;
  mapTo: number;
};

type Result = MapTypes<{ iWillTransformToNumber: string }, StringToNumber>;

type StringToDate = { mapFrom: string; mapTo: Date };
type Result2 = MapTypes<{ numOrDate: string }, StringToNumber | StringToDate>;
