/**
 * Return the Nth Even Number

Example(Input --> Output)
```
1 --> 0 (the first even number is 0)
3 --> 4 (the 3rd even number is 4 (0, 2, 4))
100 --> 198
1298734 --> 2597466
```
The input will not be 0.
 */

export function nthEven(n: number): number {
  let loops: number = 1;
  let i = 0;

  while (loops < n) {
    loops++;
    i += 2;
  }
  return i;
}

console.log(nthEven(3));
console.log(nthEven(100));
console.log(nthEven(1298734));

export function nthEvenV2(n: number): number {
  return 2 * (n - 1);
}
