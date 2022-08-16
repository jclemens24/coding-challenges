/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-redeclare */
/* eslint-disable no-var */
/* eslint-disable no-useless-constructor */

/* 
 Note: All Of The Learning TypeScript Tasks Will Be Maintained in this file as I come across them
*/

/**
 * Learning TypeScript. Classes & Interfaces. Implement interface methods
Overview
One of TypeScript’s core principles is that type-checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural subtyping”. In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

Task
You are given an interface IGeometricFigure:
```
interface IGeometricFigure {
  area: () => number;
  perimeter: () => number;
}
```

Your task is to implement classes Square and Circle:

```
export class Square implements IGeometricFigure {
  // TODO:
}

export class Circle implements IGeometricFigure {
  // TODO:
}
```
 */

interface IGeometricFigure {
  area: () => number;
  perimeter: () => number;
}

export class Square implements IGeometricFigure {
  // TODO:
  constructor(private sideLength: number) {}

  public area(): number {
    return this.sideLength * this.sideLength;
  }

  public perimeter(): number {
    return this.sideLength * 4;
  }
}

export class Circle implements IGeometricFigure {
  // TODO:
  constructor(private radius: number) {}
  public area(): number {
    return Math.PI * this.radius ** 2;
  }

  public perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

const circle = new Circle(1);
console.log(circle.area());
console.log(circle.perimeter());

/**
 * DESCRIPTION:
Learning TypeScript. Classes & Interfaces. Abstract classes
Overview
Abstract classes are base classes from which other classes may be derived. They may not be instantiated directly. Unlike an interface, an abstract class may contain implementation details for its members. The abstract keyword is used to define abstract classes as well as abstract methods within an abstract class.

```
abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log("roaming the earth...");
    }
}
```

Task
There is an old funny USSR's cartoon called "38 parrots" (https://www.youtube.com/watch?v=iEHyrNX4IR8 - with English subtitles). In this cartoon monkey and parrot measured boa... and they found out that one boa is equal to 38 parrots or 5 monkeys.

You're given an abstract class Animal and stubs for classes Animal, Boa, Parrot and Monkey:

```
export abstract class Animal {
  protected constructor(public value: number) {}

  convertTo (someone: Animal) {
    // TODO:
  }
}

export class Boa extends Animal {
  // TODO:
}

export class Parrot extends Animal {
  // TODO:
}

export class Monkey extends Animal {
  // TODO:
}
```
 */

export abstract class Animal {
  /** @param {number} value The length of the animal in parrots. */
  protected constructor(public value: number) {}

  convertTo(someone: Animal): number {
    return this.value / someone.value;
  }
}

export class Boa extends Animal {
  // TODO:
  constructor(public value: number = 38.0) {
    super(value);
  }
}

export class Parrot extends Animal {
  // TODO:
  constructor(public value: number = 1.0) {
    super(value);
  }
}

export class Monkey extends Animal {
  // TODO:
  constructor(public value: number = 7.6) {
    super(value);
  }
}

/**
 * Learning TypeScript. Basic Types. Type Assertions
Overview
Sometimes you’ll end up in a situation where you’ll know more about a value than TypeScript does. Usually this will happen when you know the type of some entity could be more specific than its current type.

Type assertions are a way to tell the compiler “trust me, I know what I’m doing.” A type assertion is like a type cast in other languages, but performs no special checking or restructuring of data. It has no runtime impact, and is used purely by the compiler. TypeScript assumes that you, the programmer, have performed any special checks that you need.

Type assertions have two forms. One is the “angle-bracket” syntax:
```
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
```
And the other is the as-syntax:
```
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```

The two samples are equivalent. Using one over the other is mostly a choice of preference; however, when using TypeScript with JSX, only as-style assertions are allowed.

Task
You are given the following code:
```
export class SuccessServerResult {
  constructor (public httpCode: number, public resultObject:Object) {}
}

export class ErrorServerResult {
  constructor (public httpCode: number, public message:string) {}
}

export function getResult(result: SuccessServerResult) {
  if (result.httpCode === 200) {
    // Returning result.resultObject if everything is OK
    return result.resultObject;
  } else {
    // Returning result.message in case of error
    // FIXME: help TypeScript Compiler to understand that result here 
    // is the instance of ErrorServerResult...
    return result.message;
  }
}
```
Your task is to find and fix error in function getResult.

HINT: Try to use double assertion - first convert it to any and then convert it to ErrorServerResult.

P.S. Solved this kata? Take a look at other katas in "Learning TypeScript" collection.
 */

export class SuccessServerResult {
  constructor(public httpCode: number, public resultObject: Object) {}
}

export class ErrorServerResult {
  constructor(public httpCode: number, public message: string) {}
}

export function getResult(result: SuccessServerResult | ErrorServerResult) {
  if (result.httpCode === 200) {
    // Returning resultObject if everything is OK
    return (result as SuccessServerResult).resultObject;
  } else {
    // Returning result.message in case of error
    // FIXME: help TypeScript Compiler to understand that result here
    // is the instance of ErrorServerResult...
    return (result as ErrorServerResult).message as any as string;
  }
}

// Using Angle Brackets and Class renamed to V2

export class SuccessServerResultV2 {
  constructor(public httpCode: number, public resultObject: Object) {}
}

export class ErrorServerResultV2 {
  constructor(public httpCode: number, public message: string) {}
}

export function getResultV2(result: SuccessServerResult | ErrorServerResult) {
  if (result.httpCode === 200) {
    // Returning resultObject if everything is OK
    return (<SuccessServerResult>result).resultObject;
  } else {
    // Returning result.message in case of error
    return (<ErrorServerResult>result).message;
  }
}

/**
 * DESCRIPTION:
Learning TypeScript. Classes & Interfaces. Inheritance
Overview
Preloaded for you in this Kata is an interface IAnimal:

```
declare var IAnimal: {
  new (
    name: string,
    age: number,
    legs: number,
    species: string,
    status: string
  ): IAnimal;
}

interface IAnimal {
  name: string;
  age: number;
  legs: number;
  species: string;
  status: string;
  introduce: () => string;
}
```

Task
I. Animal
Define class Animal that implements IAnimal. The constructor function for Animal should accept 4 arguments in total in the following order: name, age, legs, species, status. Furthermore, the introduce() method for Animal should return string with the following content: Hello, my name is ${name} and I am ${age} years old.

When done define the following classes that inherit from Animal using the extends keyword.

II. Shark
The constructor function for Shark should accept 3 arguments in total in the following order: name, age, status. All sharks should have a leg count of 0 (since they obviously do not have any legs) and should have a species of "shark".

III. Cat
The constructor function for Cat should accept the same 3 arguments as with Shark: name, age, status. Cats should always have a leg count of 4 and a species of "cat".

Furthermore, the introduce() method for Cat should be identical to the original introduce() except there should be exactly 2 spaces and the words "Meow meow!" after that. For example:

```
var example = new Cat("Example", 10, "Happy");
example.introduce() === "Hello, my name is Example and I am 10 years old.  Meow meow!"; // Notice the TWO spaces - very important
```

IV. Dog
The Dog constructor should accept 4 arguments in the specified order: name, age, status, master. master is the name of the dog's master which will be a string. Furthermore, dogs should have 4 legs and a species of "dog".

Dogs have an identical introduce() method as any other animal, but they have their own method called greetMaster() which accepts no arguments and returns "Hello (insert_master_name_here)" (of course not the literal string but replace the (insert_master_name_here) with the name of the dog's master).
 */

declare var IAnimal: {
  new (
    name: string,
    age: number,
    legs: number,
    species: string,
    status: string
    // eslint-disable-next-line no-use-before-define
  ): IAnimal;
};

interface IAnimal {
  name: string;
  age: number;
  legs: number;
  species: string;
  status: string;
  introduce: () => string;
}

export class Animal2 implements IAnimal {
  constructor(
    public name: string,
    public age: number,
    public legs: number,
    public species: string,
    public status: string
  ) {}

  public introduce(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

export class Shark extends Animal2 {
  constructor(public name: string, public age: number, public status: string) {
    super(name, age, 0, 'shark', status);
  }
}

export class Cat extends Animal2 {
  constructor(public name: string, public age: number, public status: string) {
    super(name, age, 4, 'cat', status);
  }

  public introduce(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}

export class Dog extends Animal2 {
  constructor(
    public name: string,
    public age: number,
    public status: string,
    public master: string
  ) {
    super(name, age, 4, 'dog', status);
  }

  greetMaster(): string {
    return `Hello ${this.master}`;
  }
}

/**
 * DESCRIPTION:
Learning TypeScript. Classes & Interfaces. Getters
N.B.: To solve this kata you need to choose "2.4/ES6" target.

Task
Define the following classes:

I. Cuboid
The object constructor for the class Cuboid should receive exactly three arguments in the following order: length, width, height and store these three values in this.length, this.width and this.height respectively.

The class Cuboid should then have a getter surfaceArea which returns the surface area of the cuboid and a getter volume which returns the volume of the cuboid.

II. Cube
Class Cube is a subclass of class Cuboid. The constructor function of Cube should receive one argument only, its length, and use that value passed in to set this.length, this.width and this.height.

Hint: Make a call to super, passing in the correct arguments, to make life easier ;)
 */

export class Cuboid {
  // TODO:
  constructor(
    public length: number,
    public width: number,
    public height: number
  ) {}

  get surfaceArea(): number {
    return (
      2 * (this.height * this.length) +
      2 * (this.length * this.width) +
      2 * (this.height * this.width)
    );
  }

  get volume(): number {
    return this.length * this.width * this.height;
  }
}

export class Cube extends Cuboid {
  // TODO:
  constructor(public length: number) {
    super(length, length, length);
  }
}

/**
 * DESCRIPTION:
Learning TypeScript. Classes & Interfaces. Setters
N.B.: To solve this kata you need to choose "2.4/ES6" target.

Overview
In "Learning TypeScript. Classes & Interfaces. Getters", we learned that if we knew all the dimensions (i.e. length, width, height) of a cuboid, we could easily work out its corresponding volume and surface area. The way we achieved this in our code was by the use of getters which automatically computed the volume and surface area of the cuboid whenever either one of length, width, height changed. However, in the previouos exercise, one thing we could not do is define setters for surface area or volume of a cuboid because for a given volume/SA, there were an infinite number of possibilities to the dimensions of the cuboid.

However, for cubes (a special type of cuboid), since their length, width and height are always the same, it is possible to figure out the side length of a cube given its surface area and/or volume. Therefore, in this Kata, you will be asked to define setters as well as getters for both the surface area and volume of a cube.

Task
You're given the ICuboid interface. Define a class Cube that implements ICuboid. Constructor function of Cube takes exactly one parameter length and stores the value of the argument into this.length. You will then define both a getter and a setter for the surfaceArea and volume of the cube.
 */

declare var ICuboid: {
  new (length: number): ICuboid;
};

interface ICuboid {
  /** Length of the cube */
  length: number;
  /** Surface area of the cube */
  surfaceArea: number;
  /** Volume of the cube */
  volume: number;
}

export class Cube1 implements ICuboid {
  // TODO:
  constructor(public length: number) {}

  get surfaceArea(): number {
    return 6 * Math.pow(this.length, 2);
  }

  set surfaceArea(n: number) {
    this.length = Math.sqrt(n / 6);
  }

  get volume(): number {
    return Math.pow(this.length, 3);
  }

  set volume(n: number) {
    this.length = Math.round(Math.pow(n, 1 / 3));
  }
}

/**
 * DESCRIPTION:
Learning TypeScript. Classes & Interfaces. Singletons
Overview
In software engineering, the singleton pattern is a software design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system. The concept is sometimes generalized to systems that operate more efficiently when only one object exists, or that restrict the instantiation to a certain number of objects.

An implementation of the singleton pattern must:

ensure that only one instance of the singleton class ever exists;
and provide global access to that instance.
Typically, this is done by:

declaring all constructors of the class to be private (or throw an error in constructor); and
providing a static method that returns a reference to the instance.
Task
Your task is to implement SingletonCounter class with static method getInstance that returns instance of SingletonCounter. Constructor of this class must be declared as private. This class should have inc() which increments the value of the counter (default value of the counter is zero).
 */

export class SingletonCounter {
  // TODO:
  private constructor() {}
  private static instance: SingletonCounter;
  private count = 0;
  public static getInstance() {
    if (!SingletonCounter.instance) {
      SingletonCounter.instance = new SingletonCounter();
    }
    return SingletonCounter.instance;
  }

  public inc() {
    return ++this.count;
  }
}

// Can't instantiate a new instance of this Class
// @ts-expect-error
const c = new SingletonCounter();
var counter = SingletonCounter.getInstance();
console.log(counter.inc());
console.log(counter.inc());
var counter1 = SingletonCounter.getInstance();
console.log(counter === counter1);

export class SingletonCounterV2 {
  private constructor() {}

  private count: number = 0;
  private static instance: SingletonCounterV2;
  public static getInstance(): SingletonCounterV2 {
    return (
      SingletonCounterV2.instance ||
      (SingletonCounterV2.instance = new SingletonCounterV2())
    );
  }

  public inc() {
    return ++this.count;
  }
}

/**
 * DESCRIPTION:
Learning TypeScript. Advanced Types. Intersection Types
An intersection type combines multiple types into one. This allows you to add together existing types to get a single type that has all the features you need. For example, Person & Serializable & Loggable is a Person and Serializable and Loggable. That means an object of this type will have all members of all three types.

You will mostly see intersection types used for mixins and other concepts that don’t fit in the classic object-oriented mold. (There are a lot of these in JavaScript!) Here’s a simple example that shows how to create a mixin:

```
function extend<T extends Object, U extends Object>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}

class Person {
    constructor(public name: string) { }
}
interface Loggable {
    log(): void;
}
class ConsoleLogger implements Loggable {
    log() {
        // ...
    }
}
var jim = extend(new Person("Jim"), new ConsoleLogger());
var n = jim.name;
jim.log();
```

Task
In the example above you can see that extends function returns T & U which should correspond to intersection of types T and U. But in fact it returns object containing all properties from T mixed with additional properties from U.

Your task is to create function intersect which returns object with properties that are present simultaneously in T and U.
 */

export function intersect<T extends Object, U extends Object>(
  first: T,
  second: U
): T & U {
  const result = <T & U>{};
  for (const prop in first) {
    if (prop in second) {
      (<any>result)[prop] = (<any>first)[prop];
    }
  }

  return result;
}

console.log(intersect({ a: 1 }, { a: 1, b: 2 }));

export function intersectV2<
  T extends Object,
  U extends Object,
  R extends { [K in keyof U]: K extends keyof T ? U[K] : never }
>(first: T, second: U): R {
  const result: R = Object.keys(first)
    .filter((key) => !(key in second))
    .reduce(
      // eslint-disable-next-line no-sequences
      (r, key) => (delete (r as typeof first)[key as keyof typeof first], r),
      { ...first }
    ) as any;
  return result;
}

console.log(intersectV2({ a: 1 }, { a: 1, b: 2 }));

// Lastly, we can do...

export function intersectV3<T extends Object, U extends Object>(
  first: T,
  second: U
): T & U {
  const result = <T & U>{};
  for (const prop in first) {
    if (Object.prototype.hasOwnProperty.call(second, prop)) {
      (<any>result)[prop] = (<any>first)[prop];
    }
  }

  return result;
}

console.log(intersectV3({ a: 1 }, { a: 1, b: 2 }));

/* 
I forgot to copy the Description of this challenge but the gist of it is to narrow the Union Type and 
return the string.
*/

export function join(tokens: string | string[], glue?: string): string {
  return typeof tokens === 'string' ? tokens : tokens.join(glue);
}

/**
 * DESCRIPTION:
Learning TypeScript. Mixins
Overview
Along with traditional object-oriented hierarchies, another popular way of building up classes from reusable components is to build them by combining simpler partial classes. You may be familiar with the idea of mixins or traits for languages like Scala, and the pattern has also reached some popularity in the JavaScript community.

Introduction to mixins
Generally speaking a mixin class is a class that implements a distinct aspect of functionality. Other classes can then include the mixin and access its methods and properties. That way, mixins provide a form of code reuse that is based on composing behavior.

Now let’s see how you can model mixins in TypeScript. First of all we’ll define two classes Disposable and Activatable that will act as our mixins. You can see each one is focused on a particular activity or capability. We’ll later mix these together to form a new class from both capabilities.

```
class Disposable {
    isDisposed: boolean;
    dispose() {
        this.isDisposed = true;
    }
}

class Activatable {
  isActive: boolean;
  activate() {
      this.isActive = true;
  }
  deactivate() {
      this.isActive = false;
  }
}
```

Next, we’ll create the class that will handle the combination of the two mixins. Let’s look at this in more detail to see how it does this:

```
class SmartObject implements Disposable, Activatable {
```

The first thing you may notice in the above is that instead of using extends, we use implements. This treats the classes as interfaces, and only uses the types behind Disposable and Activatable rather than the implementation. This means that we’ll have to provide the implementation in class. Except, that’s exactly what we want to avoid by using mixins.

To satisfy this requirement, we create stand-in properties and their types for the members that will come from our mixins. This satisfies the compiler that these members will be available at runtime. This lets us still get the benefit of the mixins, albeit with some bookkeeping overhead.

```
// Disposable
isDisposed: boolean = false;
dispose: () => void;
// Activatable
isActive: boolean = false;
activate: () => void;
deactivate: () => void;
```

Finally, we mix our mixins into the class, creating the full implementation.

`applyMixins(SmartObject, [Disposable, Activatable])`;

Lastly, we create a helper function that will do the mixing for us. This will run through the properties of each of the mixins and copy them over to the target of the mixins, filling out the stand-in properties with their implementations.

```
function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
```

Task
You're required to implement mixin Serializable which should contain:

`method public serialize(): string` - this method must serialize all properties of the object (i.e. return object converted to string).
`method public deserialize(source: string): void` - this is the opposite method, that converts string to object properties and assigns them to current object.
For simplicity's sake let's consider that objects won't contain any circular references. The function applyMixins is defined in tests and you don't need to change it.
 */

export class Serializable {
  serialize(): string {
    return JSON.stringify(Object.entries(this));
  }

  deserialize(source: string): void {
    Object.assign(this, JSON.parse(source));
  }
}
