export function* allRationals(): IterableIterator<[number, number]> {
  yield [1, 1];
  for (const [a, b] of allRationals()) {
    yield* [
      [a, a + b],
      [a + b, b]
    ];
  }
}
const gen = allRationals();
const a = [...Array(100000)].map(() => gen.next().value as number);
console.log(a);
