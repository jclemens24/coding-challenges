/* eslint-disable no-unused-vars */
/**
 * Implement the type of just-flip-object. Examples:

```
Flip<{ a: "x", b: "y", c: "z" }>; // {x: 'a', y: 'b', z: 'c'}
Flip<{ a: 1, b: 2, c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
Flip<{ a: false, b: true }>; // {false: 'a', true: 'b'}
```
 */

/* 
Note: You'll notice type c is incorrect but I am purposely ok with that. Boolean values are strange as keys unless those are the only two possible scenarios. The second version will handle those Boolean types as keys.
*/

type Flip<T extends object> = {
  [Key in keyof T as T[Key] extends PropertyKey ? T[Key] : never]: Key;
};

type FlipV2<T extends { [key: string]: string | number | boolean | bigint }> = {
  [Key in keyof T as `${T[Key]}`]: Key;
};

type a = Flip<{ a: 'x'; b: 'y'; c: 'z' }>; // {x: 'a', y: 'b', z: 'c'}
type b = Flip<{ a: 1; b: 2; c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
type c = Flip<{ a: false; b: true }>; // {false: 'a', true: 'b'}
type CV2 = FlipV2<{ a: false; b: true; c: 100n }>;

enum myEnum {
  left = 1,
  right = 2,
  top = 4,
  bottom = 8
}

const myConfig = myEnum.left | myEnum.right;

if (myConfig & myEnum.right) {
  console.log('Executed');
  console.log(myConfig);
  console.log(myEnum.right << 1);
  console.log(myConfig & myEnum.right);
  console.log(3 & 2);
}

type myEnumKey = keyof typeof myEnum;
const left: myEnumKey = 'left';

export {};
