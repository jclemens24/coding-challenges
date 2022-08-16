/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
/**
 *Implement TrimRight<T> which takes an exact string type and returns a new string with the whitespace ending removed.

For example:
```
type Trimed = TrimRight<'   Hello World    '> // expected to be '   Hello World'
```
 */

type TrimRight<S extends string> = S extends `${infer L}${' ' | '\n' | '\t'}`
  ? TrimRight<L>
  : S;

type Trimmed = TrimRight<'    Hello World               '>;

class MyBaseClass {
  constructor(public num: number) {}
}

const MyMixin = (superclass: any) =>
  class extends superclass {
    foo() {
      console.log('foo from Mixin1');
      if (super.foo) super.foo();
    }
  };

const MyMixin2 = (superclass: any) =>
  class extends superclass {
    foo() {
      console.log('Mixin from Mixin2');
      if (super.foo) super.foo();
    }
  };

class S {
  foo() {
    console.log('foo from S');
  }
}

class Test extends MyMixin(MyMixin2(S)) {
  foo() {
    console.log('foo from C');
    super.foo();
  }
}

new Test().foo();

class MyClass extends MyMixin(MyBaseClass) {}
const c = new MyClass();
c.foo();
