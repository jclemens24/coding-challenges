/**
 * {@link https://en.wikipedia.org/wiki/Baum%E2%80%93Sweet_sequence} Wikipedia: The Baum–Sweet sequence is an infinite automatic sequence of `0`s and `1`s defined by the rule:

bn = `1` if the binary representation of n contains no block of consecutive 0s of odd length;
bn = 0 otherwise;

for `n ≥ 0`.

Define a generator function baumSweet that sequentially generates the values of this sequence.

It will be tested for up to `1 000 000` values.

Note that the binary representation of `0` used here is not `0` but the empty string ( which does not contain any blocks of consecutive `0`s ).
 */

export function* baumSweet(): Generator<number, number, number> {
  yield 1;

  for (let i = 1; ; i++) {
    yield i
      .toString(2)
      .split(/1/g)
      .some((bin) => bin.length % 2)
      ? 0
      : 1;
  }
}

const take = (n: number) => (gen: Generator) =>
  Array.from({ length: n }, () => gen.next().value);

console.log(take(20)(baumSweet()));
console.log(take(1e3)(baumSweet()));

export function* baumSweetV2(): Generator<number, any, undefined> {
  yield 1;
  let i: number = 0;
  while (true) {
    i += 1;
    yield +i
      .toString()
      .split(/1/g)
      .every((val) => val.length % 2 === 0);
  }
}
