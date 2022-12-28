/* eslint-disable no-unused-vars */
import type { Equal, Expect } from '@type-challenges/utils';

/**
 * Implement a generic DeepMutable which make every parameter of an object - and its sub-objects recursively - mutable.

For example

```typescript
type X = {
  readonly a: () => 1
  readonly b: string
  readonly c: {
    readonly d: boolean
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true
          readonly j: "s"
        }
        readonly k: "hello"
      }
    }
  }
}

type Expected = {
  a: () => 1
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: "s"
        }
        k: "hello"
      }
    }
  }
}

type Todo = DeepMutable<X> // should be same as `Expected`
```

You can assume that we are only dealing with Objects in this challenge. Arrays, Functions, Classes and so on do not need to be taken into consideration. However, you can still challenge yourself by covering as many different cases as possible.


 */

type DeepMutable<T extends Record<PropertyKey, any>> = {
  -readonly [Key in keyof T]: T[Key] extends Record<keyof any, any>
    ? T[Key] extends (...args: unknown[]) => infer _R
      ? T[Key]
      : DeepMutable<T[Key]>
    : T[Key];
};

interface Test1 {
  readonly title: string;
  readonly description: string;
  readonly completed: boolean;
  readonly meta: {
    readonly author: string;
  };
}
type Test2 = {
  readonly a: () => 1;
  readonly b: string;
  readonly c: {
    readonly d: boolean;
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true;
          readonly j: 's';
        };
        readonly k: 'hello';
      };
      readonly l: readonly [
        'hi',
        {
          readonly m: readonly ['hey'];
        }
      ];
    };
  };
};
interface DeepMutableTest1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

type DeepMutableTest2 = {
  a: () => 1;
  b: string;
  c: {
    d: boolean;
    e: {
      g: {
        h: {
          i: true;
          j: 's';
        };
        k: 'hello';
      };
      l: [
        'hi',
        {
          m: ['hey'];
        }
      ];
    };
  };
};

type Case1 = DeepMutable<Test2>;
type cases = [
  Expect<Equal<DeepMutable<Test1>, DeepMutableTest1>>,
  Expect<Equal<DeepMutable<Test2>, DeepMutableTest2>>
];

export {};
