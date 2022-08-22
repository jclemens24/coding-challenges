/**
 * DESCRIPTION:
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
```
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
```
`comp(a, b)` returns true because in `b 121` is the square of `11`, `14641` is the square of `121`, `20736` the square of `144`, `361` the square of `19`, `25921` the square of `161`, and so on. It gets obvious if we write b's elements in terms of squares:
```
a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
```
Invalid arrays
If, for example, we change the first number to something else, comp is not returning true anymore:
```
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
```
`comp(a,b) returns false` because in `b 132` is not the square of any number of `a`.
```
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
```
`comp(a,b)` returns `false` because in `b 36100` is not the square of any number of `a`.

Remarks
a or b might be [] or {} (all languages except R, Shell).
a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

Note for C
The two arrays have the same size (> 0) given as parameter in function comp.
 */

export function comp(a1: number[] | null, a2: number[] | null): boolean {
  if (a1 && a2) {
    const sorteda1 = a1.sort((a, b) => a - b);
    const sortedb2 = a2.sort((a, b) => a - b);

    return sorteda1.every((val, i) => {
      if (Math.sqrt(sortedb2[i]) === val) return true;
      return false;
    });
  }
  return false;
}

console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
);

console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [132, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
);

export function compV2(a1: number[] | null, a2: number[] | null): boolean {
  if (a1 && a2) {
    const compMap = new Map<number, number>();
    for (const num of a2) {
      const count = compMap.get(num) || 0;
      compMap.set(num, count + 1);
    }

    for (const num of a1) {
      const numSqaured = Math.pow(num, 2);
      const count = compMap.get(numSqaured) || 0;
      if (count < 1) return false;
      compMap.set(numSqaured, count - 1);
    }
    return true;
  } else return false;
}

console.log(
  compV2(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
);

console.log(
  compV2(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [132, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
);

export const compV3 = (
  a1: Array<number> | null,
  a2: Array<number> | null
): boolean => {
  if (!(a1 && a2) || a1.length !== a2.length) return false;
  return (
    a1
      .map((val) => val ** 2)
      .sort()
      .toString() === a2.sort().toString()
  );
};

console.log(
  compV3(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
);

console.log(
  compV3(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [132, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
);
