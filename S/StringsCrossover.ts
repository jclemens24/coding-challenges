/**
 * Define crossover operation over two equal-length strings A and B as follows:

the result of that operation is a string of the same length as the input strings
result[i] is either A[i] or B[i], chosen at random
Given array of strings inputArray and a string result, find for how many pairs of strings from inputArray the result of the crossover operation over them may be equal to result.

Note that (A, B) and (B, A) are the same pair. Also note that the pair cannot include the same element of the array twice (however, if there are two equal elements in the array, they can form a pair).
 */

const StringsCrossover = (inputArray: string[], result: string): number => {
  let count = 0;

  for (let i = 0; i < inputArray.length; i++) {
    for (let j = i + 1; j < inputArray.length; j++) {
      if (CheckCrossover(inputArray[i], inputArray[j], result)) {
        count++;
      }
    }
  }
  return count;
};

function CheckCrossover(A: string, B: string, res: string): boolean {
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== res[i] && B[i] !== res[i]) {
      return false;
    }
  }
  return true;
}

console.log(StringsCrossover(['abc', 'aaa', 'aba', 'bab'], 'bbb'));

const StringsCrossoverV2 = (inputArray: string[], result: string): number => {
  const binaryArr = inputArray.map((str) => {
    let i = 0;
    let bin = 0;
    while (i < result.length) {
      bin <<= 1;
      if (str[i] === result[i]) {
        bin |= 1;
      }
      i++;
    }
    return bin;
  });

  let sum = 0;
  const check = (1 << result.length) - 1;

  for (let i = 0; i < binaryArr.length - 1; ++i) {
    for (let j = i + 1; j < binaryArr.length; ++j) {
      if ((binaryArr[i] | binaryArr[j]) === check) {
        sum++;
      }
    }
  }
  return sum;
};

console.log(StringsCrossoverV2(['abc', 'aaa', 'aba', 'bab'], 'bbb'));

const StringsCrossoverV3 = (inputArray: string[], result: string): number => {
  const r = result.split('');
  return inputArray.reduce(
    (prev, curr, i) =>
      prev +
      inputArray
        .slice(i + 1)
        .reduce(
          (pre, cur) =>
            r.every((l, k) => l === curr[k] || l === cur[k]) ? pre + 1 : pre,
          0
        ),
    0
  );
};

console.log(StringsCrossoverV3(['abc', 'aaa', 'aba', 'bab'], 'bbb'));
