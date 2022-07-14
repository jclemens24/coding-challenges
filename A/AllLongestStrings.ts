/**
 * Given an array of strings, return another array containing all of its longest strings.
 *
 *
 */

export function longestString(inputArray: string[]): string[] {
  let longestString: string[] = [];
  let maxLength = 0;
  for (let i = 0; i < inputArray.length; i++) {
    const currLength = inputArray[i].length;
    if (currLength > maxLength) {
      longestString = [inputArray[i]];
      maxLength = currLength;
    } else if (maxLength === currLength) {
      longestString.push(inputArray[i]);
    }
  }
  return longestString;
}

console.log(longestString(['aba', 'aa', 'ad', 'vcd', 'aba']));

export function LongestStringV2(inputArray: string[]): string[] {
  const max = Math.max(...inputArray.map((x) => x.length));
  return inputArray.filter((x) => x.length === max);
}

function LongestStringV3(inputArray: string[]): string[] {
  const max = Math.max(...inputArray.map((x) => x.length));
  const maxArr = [];

  for (const n of inputArray) {
    if (n.length === max) {
      maxArr.push(n);
    }
  }
  return maxArr;
}

console.log(LongestStringV3(['aba', 'aa', 'ad', 'vcd', 'aba']));
