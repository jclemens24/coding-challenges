/**
 * Create a Vector object that supports addition, subtraction, dot products, and norms. So, for example:
```
a = new Vector([1, 2, 3])
b = new Vector([3, 4, 5])
c = new Vector([5, 6, 7, 8])

a.add(b)      # should return a new Vector([4, 6, 8])
a.subtract(b) # should return a new Vector([-2, -2, -2])
a.dot(b)      # should return 1*3 + 2*4 + 3*5 = 26
a.norm()      # should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
a.add(c)      # throws an error
```

If you try to add, subtract, or dot two vectors with different lengths, you must throw an error!

Also provide:
```
a toString method, so that using the vectors from above, a.toString() === '(1,2,3)' (in Python, this is a __str__ method, so that str(a) == '(1,2,3)')
an equals method, to check that two vectors that have the same components are equal
Note: the test cases will utilize the user-provided equals method.
```
 */

export class Vector {
    public data;

    get size() {
        return this.data.length;
    }

    private compatible(other: Vector) {
        return this.size === other.size;
    }
    constructor(components: number[]) {
        this.data = [...components]
    }

    public add(component: Vector): Vector {
        if (!this.compatible(component)) {
            throw new Error('Vector method data structures must be of equal length');
        }

        return new Vector(this.data.map((val, i) => component.data[i] + val));
    }

    public subtract(component: Vector): Vector {
        if (!this.compatible(component)) {
            throw new Error('Vector method data structures must be of equal length');
        }

        return new Vector(this.data.map((val, i) => val - component.data[i]))
    }

    public dot(component: Vector): number {
        if (!this.compatible(component)) {
            throw new Error('Vector method data structures must be of equal length');

        }

        return this.data.reduce((acc, curr, i) => acc + curr * component.data[i], 0)
    }

    public norm(): number {
        const newData = this.data.reduce((acc, curr) => acc + curr ** 2, 0);
        console.log(newData)
        return Math.sqrt(newData)
    }

    public toString() {
        return `(${this.data.toString()})`
    }

    public equals(component: Vector) {
        return this.data.every((val, i) => val === component.data[i]);
    }
  };

const a = new Vector([1, 2]);
const b = new Vector([3,4])
console.log(a.equals(b))

const aa = new Vector([1,2,3]);
const bb = new Vector([3,4,5]);
console.log(aa.add(bb))
console.log(aa.norm())