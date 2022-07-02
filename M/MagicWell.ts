/**
 *You are standing at a magical well. It has two positive integers written on it: a and b. Each time you cast a magic marble into the well, it gives you `a * b` dollars and then both `a and b increase by 1`. You have `n` magic marbles. How much money will you make?

Example

For `a = 1, b = 2, and n = 2`, the output should be
`solution(a, b, n) = 8`.

You will cast your first marble and get `$2`, after which the numbers will become `2` and `3`. When you cast your second marble, the well will give you `$6`. Overall, you'll make `$8`. So, the output is `8`.
 */

function MagicWell(a: number, b: number, n: number): number {
  let result = 0;
  while (n > 0) {
    result = result + a * b;
    a++;
    b++;
    n--;
  }
  console.log(result);
  return result;
}

MagicWell(1, 2, 2);
MagicWell(1, 1, 1);
MagicWell(6, 5, 3);

/**
 * You could also use recursion in this function which may be cleaner
 */

function MagicWellV2(a: number, b: number, n: number): number {
  let result: number = 0;

  if (n > 0) {
    result = a * b + MagicWellV2(++a, ++b, --n);
  }

  return result;
}
console.log(MagicWellV2(1, 2, 2));
console.log(MagicWellV2(1, 1, 1));
console.log(MagicWellV2(6, 5, 3));
