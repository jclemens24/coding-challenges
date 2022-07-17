/**
 * Given an array of `2k` integers (for some integer `k`), perform the following operations until the array contains only one element:

  1. On the `1st, 3rd, 5th`, etc. iterations (1-based) replace each pair of consecutive elements with their sum;

  2. On the `2nd, 4th, 6th`, etc. iterations replace each pair of consecutive elements with their product.

After the algorithm has finished, there will be a single element left in the array. Return that element.
 */

const ArrayConversion = (inputArray: number[]): number => {
  let bool = false;

  while (inputArray.length > 1) {
    const ret = [];
    for (let i = 0; i < inputArray.length; i += 2) {
      if (bool) ret.push(inputArray[i] * inputArray[i + 1]);
      else ret.push(inputArray[i] + inputArray[i + 1]);
    }
    inputArray = ret;
    bool = !bool;
  }
  return inputArray.at(0)!;
};

console.log(ArrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));

const ArrayConversionV2 = (inputArray: number[]): number => {
  let k: number = 0;
  let n = inputArray.length;
  while (n > 1) {
    n /= 2;
    k++;
  }

  for (let i = 0; i < k; i++) {
    for (let j = 0; j < inputArray.length / 2; j++) {
      if (i % 2 === 0) {
        inputArray[j] = inputArray[2 * j] + inputArray[2 * j + 1];
      } else {
        inputArray[j] = inputArray[2 * j] * inputArray[2 * j + 1];
      }
    }
  }
  return inputArray[0];
};

console.log(ArrayConversionV2([1, 2, 3, 4, 5, 6, 7, 8]));
