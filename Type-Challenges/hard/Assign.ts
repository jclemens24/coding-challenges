/* eslint-disable no-unused-vars */
/**
 * You have a target object and a source array of objects. You need to copy property from source to target, if it has the same property as the source, you should always keep the source property, and drop the target property. (Inspired by the Object.assign API)

example
```
type Target = {
  a: 'a'
}

type Origin1 = {
  b: 'b'
}

// type Result = Assign<Target, [Origin1]>
type Result = {
  a: 'a'
  b: 'b'
}
type Target = {
  a: 'a'
  d: { 
    hi: 'hi'
  }
}

type Origin1 = {
  a: 'a1',
  b: 'b'
}


type Origin2 = {
  b: 'b2',
  c: 'c'
}

type Answer = {
   a: 'a1',
   b: 'b2',
   c: 'c'
   d: { 
      hi: 'hi'
  }
}
```
 */

type Assign<Target extends object, Source> = Source extends [
  infer First,
  ...infer Rest
]
  ? First extends Record<PropertyKey, unknown>
    ? Assign<
        {
          [Prop in keyof Target | keyof First]: Prop extends keyof First
            ? First[Prop]
            : Prop extends keyof Target
            ? Target[Prop]
            : never;
        },
        Rest
      >
    : Target
  : Target;

type Target = {
  a: 'a';
  d: {
    hi: 'hi';
  };
};

type Origin1 = {
  a: 'a1';
  b: 'b';
};

type Origin2 = {
  b: 'b2';
  c: 'c';
};

const target: Target = {
  a: 'a',
  d: {
    hi: 'hi'
  }
};

const origin1: Origin1 = {
  a: 'a1',
  b: 'b'
};

const origin2: Origin2 = {
  b: 'b2',
  c: 'c'
};

const A: Assign<Target, [Origin1, Origin2]> = Object.assign<
  Target,
  Origin1,
  Origin2
>(target, origin1, origin2);

type Answer = Assign<Target, [Origin1, Origin2]>;

// type Answer = {
//    a: 'a1',
//    b: 'b2',
//    c: 'c'
//    d: {
//       hi: 'hi'
//   }
// }

export {};
