/* eslint-disable no-useless-constructor */
/* eslint-disable no-redeclare */
/* eslint-disable no-var */

/**
 * In software engineering, the singleton pattern is a design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system.

Create an Singleton pattern, so there is one object in system.

Example:

```
var obj1 = new Singleton();
var obj2 = new Singleton();
obj1 === obj2; // => true
obj1.test = 1;
obj2.test; // => 1
```
 */

class Singleton {
  private constructor() {}
  // eslint-disable-next-line no-use-before-define
  private static instance: Singleton;

  public static getInstance() {
    if (!this.instance) {
      return (this.instance = new Singleton());
    }
    return this.instance;
  }
}

// var Singleton = function () {
//   return (Singleton.ins = Singleton.ins ? Singleton.ins : this);
// };

const c = Singleton.getInstance();
console.log(c instanceof Singleton);
const d = Singleton.getInstance();
console.log(c === d);
