/**
 * Given an array of integers, sort its elements by the difference of their largest and smallest digits. In the case of a tie, that with the larger index in the array should come first.
 *
 * First, we map over each element of the `a` array, storing each element as an object { num: 152, i: 0 }, etc and store that array of objects inside the `toObj` variable. This keeps our integers aligned with their original index inside the array so that we can evaluate them later.
 *
 * Next, we run a sorting algorithm on the `toObj` variable. Iterating over each element (which are objects like shown above), we convert each element.num to a String and then .split() them and then .map() over them and convert it back to a number[]; We find the max and min by spreading each array into the method and then subtract their difference. If `val1 !== val2`, we can safely assume that its difference is unique (remember, in case of a tie, that with the larger index in the array should come first). Else, we return the largest of the 2 elements which is shown by `b.i - a.i`;
 *
 * Lastly, we have to .map() over the resulting `sorted` array in order to return only the nums.
 */

const DigitDifferenceSort = (a: number[]): number[] => {
  const toObj = a.map((num, i) => ({ num, i }));
  console.log(toObj);

  const sorted = toObj.sort((a, b) => {
    const arrOfA = String(a.num).split('').map(Number);
    const arrOfB = String(b.num).split('').map(Number);
    const val1 = Math.max(...arrOfA) - Math.min(...arrOfA);
    const val2 = Math.max(...arrOfB) - Math.min(...arrOfB);
    return val1 !== val2 ? val1 - val2 : b.i - a.i;
  });

  return sorted.map((obj) => obj.num);
};

console.log(DigitDifferenceSort([152, 23, 7, 887, 243]));
