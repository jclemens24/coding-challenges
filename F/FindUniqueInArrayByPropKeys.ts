/**
 * Your task is to return unique objects from an array.

You will receive two arrays, `objs` and `keys`. Unique objects mean that the object properties defined on `keys` are unique, for example:

```
// keys
[ 'x', 'y' ]

// objs
{ x: 1, y: 1 },
{ x: 2, y: 2 },
{ x: 1, z: 1 },
{ x: 1, y: 1, z: 3 },
```
The expected result is:
```
{ x: 1, y: 1 },
{ x: 2, y: 2 },
{ x: 1, z: 1 },
```
Because `x` and `y` repeat on the first and last element, so only the first will be picked up.

If a key is not present in the object the value of this property will be considered "not defined" native value for the current language.
 */

export function unique<T extends Record<keyof any, any>>(
  arr: T[],
  keys: string[]
): T[] {
  const groups = Object.values(createGroups(serializeByKeys<T>(keys), arr));
  return flat(groups.map((x) => x[0]));
}

const flat = (x: any[]) => Array.prototype.concat.apply([], x);

const serializeByKeys = <T extends Record<keyof any, any>>(keys: string[]) => {
  return (json: T): string => {
    return JSON.stringify(keys.map((key) => json[key]));
  };
};

const createGroups = <T>(
  fn: (x: T) => string,
  arr: T[]
): Record<string, T[]> => {
  const dict: Record<string, any[]> = {};

  arr.forEach((item) => {
    const hash = fn(item);
    if (!dict[hash]) {
      dict[hash] = [];
    }
    dict[hash].push(item);
  });
  return dict;
};

console.log(
  unique(
    [
      { x: 1, y: 1 },
      { x: 2, y: 2 },
      { x: 1, z: 1 },
      { x: 1, y: 1, z: 3 }
    ],
    ['x', 'y']
  )
);

export function uniqueV2(arr: any[], keys: string[]): any[] {
  const result: any[] = [];
  const uniqueArr: any[] = [];
  arr.forEach((entry) => {
    console.log(Object.entries(entry));
    const o = Object.entries(entry);
    console.log(o.length);
  });
  arr.forEach((entry) => {
    const obj = Object.entries(entry).reduce((acc: any, curr) => {
      const [key, value] = curr;
      if (keys.includes(key)) {
        acc[key] = value;
      }
      return acc;
    }, {});

    let doesExist = false;
    result.forEach((a) => {
      let match = keys.length;

      keys.forEach((key) => {
        if (a[key] === obj[key]) {
          match--;
        }
      });

      if (match === 0) doesExist = true;
    });
    if (!doesExist) {
      result.push(entry);
      uniqueArr.push(obj);
    }
  });
  return result;
}

console.log(
  uniqueV2(
    [
      { x: 1, y: 1 },
      { x: 2, y: 2 },
      { x: 1, z: 1 },
      { x: 1, y: 1, z: 3 }
    ],
    ['x', 'y']
  )
);
