/**
 *We define the weakness of number x as the number of positive integers smaller than x that have more divisors than x.

It follows that the weaker the number, the greater overall weakness it has. For the given integer n, you need to answer two questions:

what is the weakness of the weakest numbers in the range [1, n]?
how many numbers in the range [1, n] have this weakness?
Return the answer as an array of two elements, where the first element is the answer to the first question, and the second element is the answer to the second question.
 */

function WeakNumbers(n: number): number[] {
  const divisors = (n: number) => {
    let div = 0;

    for (let i = 1; i <= n; i++) {
      if (n % i === 0) div++;
    }
    return div;
  };

  const weakness = (n: number) => {
    let level = 0;
    const divisor = divisors(n);

    for (let i = 1; i < n; i++) {
      if (divisors(i) > divisor) level++;
    }
    return level;
  };

  const weakNumbers = (n: number): number[] => {
    const weaknessSet: number[] = [];

    for (let i = 1; i <= n; i++) {
      weaknessSet.push(weakness(i));
      console.log(...weaknessSet.values());
    }

    const weakestNumber = weaknessSet.reduce((prev, curr) =>
      prev < curr ? curr : prev
    );

    return [
      weakestNumber,
      weaknessSet.filter((i) => i === weakestNumber).length
    ];
  };

  return weakNumbers(n);
}

console.log(WeakNumbers(9));

function WeakNumbersV2(n: number): number[] {
  let count = 0;
  const m = Object.create({});
  const arr = [];

  for (let i = 1; i <= n; i++) {
    m[i] = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) m[i]++;
    }
  }

  while (n > 0) {
    for (let num = n - 1; num > 0; num--) {
      if (m[n] < m[num]) count++;
    }
    arr.push(count);
    count = 0;
    n--;
  }

  const weakness = Math.max(...arr);
  for (const key in arr) {
    if (weakness === arr[key]) count++;
  }
  console.log(`m: `, Object.entries(m));
  console.log('a :', arr);
  return [weakness, count];
}

console.log(WeakNumbersV2(9));
