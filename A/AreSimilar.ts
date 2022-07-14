/**
 * Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.

 * @param a array of ints
 * @param b array of ints
 * @returns boolean representing if a and b are similar. They are similar if one can be obtained from another by swapping at most one element in one of the arrays.
 */

const AreSimilar = function (a: number[], b: number[]): boolean {
  let t = 0;
  let i = 0;
  for (const x in a) {
    if (a[x] ^ b[x]) {
      console.log('xor: ', a[x] ^ b[x]);
      ++i;
      t ^= a[x] ^ b[x];
      console.log(t, i);
      // console.log((a[x] >>> 0).toString(2));
      // console.log((b[x] >>> 0).toString(2));
    }
  }
  if (i === 2 || i === 0) return !t;
  return false;
};

console.log(AreSimilar([1, 2, 3], [2, 1, 3]));

const AreSimilarV2 = function (a: number[], b: number[]): boolean {
  const aFiltered = a.filter((val, i) => val !== b[i]);
  const bFiltered = b.filter((val, i) => val !== a[i]);
  console.log(aFiltered);
  console.log(bFiltered);
  return (
    aFiltered.length === 0 ||
    (aFiltered.length === 2 &&
      aFiltered.join('') === bFiltered.reverse().join(''))
  );
};

console.log(
  AreSimilarV2(
    [832, 998, 148, 570, 533, 561, 894, 147, 455, 279],
    [832, 998, 148, 570, 533, 561, 455, 147, 894, 279]
  )
);

const AreSimilarV3 = function (a: number[], b: number[]): boolean {
  const notSimilarAtIndex: number[] = [];
  a.forEach((_, i) => {
    if (a[i] !== b[i]) notSimilarAtIndex.push(a[i], b[i]);
  });
  console.log(new Set(notSimilarAtIndex).size);
  return notSimilarAtIndex.length <= 4 && new Set(notSimilarAtIndex).size <= 2;
};

console.log(
  AreSimilarV3(
    [832, 998, 148, 570, 533, 561, 894, 147, 455, 279],
    [832, 998, 148, 570, 533, 561, 455, 147, 894, 279]
  )
);
