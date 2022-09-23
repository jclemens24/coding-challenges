/**
 * According to the creation myths of the Abrahamic religions, Adam and Eve were the first Humans to wander the Earth.

You have to do God's job. The creation method must return an array of length 2 containing objects (representing Adam and Eve). The first object in the array should be an instance of the class Man. The second should be an instance of the class Woman. Both objects have to be subclasses of Human. Your job is to implement the Human, Man and Woman classes.
 */

export abstract class Human {}

export class God {
  /**
   * @returns Human[]
   */
  static create() {
    return [new Man('Adam'), new Woman('Eve')];
  }
}
// code

export class Man extends Human {
  constructor(public name: string) {
    super();
  }
}

export class Woman extends Human {
  constructor(public name: string) {
    super();
  }
}

const humans = God.create();
console.log(humans[0] instanceof Man, humans[1] instanceof Woman);
console.log(humans[0] instanceof Human, humans[1] instanceof Human);
