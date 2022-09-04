/**
 * My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

  1. Take a list of ages when each of your great-grandparent died.
  2. Multiply each number by itself.
  3. Add them all together.
  4. Take the square root of the result.
  5. Divide by two.
Example
```
predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
```
Note: the result should be rounded down to the nearest integer.

Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.
 */

export function predictAge(
  age1: number,
  age2: number,
  age3: number,
  age4: number,
  age5: number,
  age6: number,
  age7: number,
  age8: number
): number {
  const ages = Array.from(arguments) as Array<number>;
  const squared = ages.map((age) => age ** 2);
  return Math.floor(
    Math.sqrt(squared.reduce((prev, curr) => prev + curr, 0)) / 2
  );
}

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45));

export function predictAgeV2(
  age1: number,
  age2: number,
  age3: number,
  age4: number,
  age5: number,
  age6: number,
  age7: number,
  age8: number
): number {
  const args = Array.prototype.slice.call(arguments);
  return Math.floor(
    Math.sqrt(
      args.map((age) => age * age).reduce((prev, curr) => prev + curr, 0)
    ) / 2
  );
}

console.log(predictAgeV2(65, 60, 75, 55, 60, 63, 64, 45));

export function predictAgeV3(...ages: number[]): number {
  return Math.floor(
    Math.sqrt(
      ages.map((age) => Math.pow(age, 2)).reduce((prev, curr) => prev + curr, 0)
    ) / 2
  );
}

console.log(predictAgeV3(65, 60, 75, 55, 60, 63, 64, 45));

export function predictAgeV4(
  age1: number,
  age2: number,
  age3: number,
  age4: number,
  age5: number,
  age6: number,
  age7: number,
  age8: number
): void {
  const ages = Object.keys(arguments).map(
    (key: string) => arguments[key as keyof typeof arguments]
  ) as number[];
  console.log(ages);
  console.log(arguments);
}

console.log(predictAgeV4(65, 60, 75, 55, 60, 63, 64, 45));
