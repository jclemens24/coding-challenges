function ZigZag(numbers: number[]): number[] {
  const res: number[] = [];

  for (let i = 0; i < numbers.length - 2; i++) {
    if (numbers[i] < numbers[i + 1] && numbers[i + 1] > numbers[i + 2]) {
      res[i] = 1;
    } else if (numbers[i] > numbers[i + 1] && numbers[i + 1] < numbers[i + 2]) {
      res[i] = 1;
    } else {
      res[i] = 0;
    }
  }
  return res;
}

console.log(ZigZag([1, 2, 1, 3, 4]));
console.log(ZigZag([1, 2, 3, 4]));
console.log(ZigZag([1000000000, 1000000000, 1000000000]));

function TinyPairs(a: number[], b: number[], k: number): number {
  let result = 0;
  const rev = b.reverse();
  console.log(rev);

  for (let i = 0; i < a.length; i++) {
    const str = `${a[i]}${rev[i]}`;
    console.log(str);
    if (parseInt(str, 10) < k) {
      result++;
    } else {
      continue;
    }
  }
  return result;
}

console.log(TinyPairs([1, 2, 3], [1, 2, 3], 31));
console.log(TinyPairs([16, 1, 4, 2, 14], [7, 11, 2, 0, 15], 743));

/**
 * You are given an array of integers a, where each element a[i] represents the length of a ribbon.

Your goal is to obtain k ribbons of the same length, by cutting the ribbons into as many pieces as you want.

Your task is to calculate the maximum integer length L for which it is possible to obtain at least k ribbons of length L by cutting the given ones.

Example

For a = [5, 2, 7, 4, 9] and k = 5, the output should be solution(a, k) = 4.

example

Here's a way to achieve 5 ribbons of length 4:

Cut the ribbon of length 5 into one ribbon of length 1 (which can be discarded) and one ribbon of length 4.
Cut the ribbon of length 7 into one ribbon of length 3 (which can be discarded) and one ribbon of length 4.
Use the existing ribbon of length 4 (no need to cut it)
Cut the ribbon of length 9 into two ribbons of length 4 (and one of length 1 which can be discarded)
Discard the ribbon of length 2.
And since it wouldn't be possible to make 5 ribbons of any greater length, the answer is 4.

For `a = [1, 2, 3, 4, 9] and k = 6`, the output should be solution(a, k) = 2.

Here's one way we could make 6 ribbons of length 2:

Cut the ribbon of length 9 into four ribbons of length 2 and one ribbon of length 1 (which won't be used).
Cut the ribbon of length 4 into two ribbons of length 2.
Ignore all other ribbons (1, 2, and 3). Even though ribbons with lengths 2 and 3 can also be used to obtain the ribbon of length 2, we don't need more than 6 ribbons of that length.
It would technically be possible to make 6 ribbons of a length as great as 2.25, but since only integer values are allowed, the answer is 2.
 * @param {array} a Array of numbers representing ribbon length
 * @param k - Number of desired ribbons a.k.a target  
 * @returns Max length of each ribbon to get desired target
 */

function CutRibbonLength(a: number[], k: number): number {
  const sum = a.reduce((acc, curr) => acc + curr, 0);
  if (sum < k) return 0;

  a.sort((a, b) => a - b);

  let start = 1;

  let end = Math.max(...a);

  while (start <= end) {
    const middle = Math.floor(start + (end - start) / 2);
    console.log('middle: %d', middle);
    let l = 0;

    for (const num of a) {
      l += Math.floor(num / middle);
    }
    if (l >= k) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  console.log(end);
  return end;
}

CutRibbonLength([1, 2, 3, 4, 9], 6);
CutRibbonLength([5, 2, 7, 4, 9], 5);

/*
The above function is a great example of a Binary Search Approach. Binary Search approach is a `searching algorithm` used in a sorted array by repeatedly dividing the search interval in half. 

The idea is to use the info that the array is sorted and reduce the time complexity to O(log n)

Binary Search Algorith:

`
1. Begin with mid element of the whole array as a search key.
2. If the value of the search key is equal to the item then return an index of the search key.
3. If the value of search key is less than item in the middle interval, narrow the interval to the lower half.
4. Otherwise, narrow to upper half.
5. Repeatedly check from the second point until the value is found or the interval is empty


*/
