/**
 * DESCRIPTION:
#Split all even numbers to odd ones in different ways

Your task is to split all even numbers from an array to odd ones. So your method has to return a new array with only odd numbers.

For "splitting" the numbers there are four ways.

```
0 -> Split into two odd numbers, that are closest to each other.
     (e.g.: 8 -> 3,5)
1 -> Split into two odd numbers, that are most far from each other.
     (e.g.: 8 -> 1,7)
2 -> All new odd numbers from the splitting should be equal and the maximum possible number.
     (e.g.: 8 -> 1, 1, 1, 1, 1, 1, 1, 1)
3 -> Split into 1s.
     (e.g.: 8 -> 1, 1, 1, 1, 1, 1, 1, 1)
The new numbers (from the splitting) have always to be in ascending order.
So in the array every even number is replaced by the new odd numbers from the splitting.
```

Your method will get as parameters the input-array and the number of the way for splitting the even numbers.

Some Examples
```
[1,10,1,3],0 -> [1,5,5,1,3]
[1,10,1,3],1 -> [1,1,9,1,3]
[1,10,1,3],2 -> [1,5,5,1,3]
[1,10,1,3],3 -> [1,1,1,1,1,1,1,1,1,1,1,1,3]

[1,1,3,8],0 -> [1,1,3,3,5]
[1,1,3,8],1 -> [1,1,3,1,7]
[1,1,3,8],2 -> [1,1,3,1,1,1,1,1,1,1,1]
[1,1,3,8],3 -> [1,1,3,1,1,1,1,1,1,1,1]
```

The array will never be null and will always contain only integer numbers > 0. Also your result-array must contain only integer numbers > 0. The way-parameter will always be between inclusive 0 and inclusive 3 (0,1,2,3).

You must not change the input-array!




Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!
 */

export function splitAllEvenNumbers(numbers: number[], way: number): number[] {
  let arr: number[] = [];
  // Way === 0
  const wayIsZero = () => {
    const arr: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2) {
        arr.push(numbers[i]);
      } else {
        if ((numbers[i] / 2) % 2 !== 0) {
          arr.push(numbers[i] / 2, numbers[i] / 2);
        } else {
          arr.push(numbers[i] / 2 - 1, numbers[i] / 2 + 1);
        }
      }
    }
    return arr;
  };

  const wayIsOne = () => {
    const arr: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2) {
        arr.push(numbers[i]);
      } else {
        arr.push(1, numbers[i] - 1);
      }
    }
    return arr;
  };

  const wayIsTwo = () => {
    const arr: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2) arr.push(numbers[i]);
      else {
        if ((numbers[i] / 2) % 2) {
          arr.push(numbers[i] / 2, numbers[i] / 2);
        } else {
          for (let j = numbers[i]; j > 0; j--) {
            if (j % 2 !== 0 && numbers[i] % j === 0) {
              if (j === 1) {
                for (let y = 0; y < numbers[i]; y++) {
                  arr.push(1);
                }
              } else {
                for (let m = 0; m <= j; m++) {
                  arr.push(j);
                }
                break;
              }
            }
          }
        }
      }
    }
    return arr;
  };

  const wayIsThree = () => {
    const arr: number[] = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2) arr.push(numbers[i]);
      else {
        for (let j = 0; j < numbers[i]; j++) {
          arr.push(1);
        }
      }
    }
    return arr;
  };

  switch (way) {
    case 0: {
      arr = wayIsZero();
      break;
    }
    case 1: {
      arr = wayIsOne();
      break;
    }
    case 2: {
      arr = wayIsTwo();
      break;
    }
    default: {
      arr = wayIsThree();
    }
  }
  return arr;
}

console.log(splitAllEvenNumbers([1, 10, 1, 3], 0));
console.log(splitAllEvenNumbers([1, 10, 1, 3], 1));
console.log(splitAllEvenNumbers([1, 10, 1, 3], 2));
console.log(splitAllEvenNumbers([1, 10, 1, 3], 3));
console.log(splitAllEvenNumbers([1, 1, 3, 8], 2));

export function splitAllEvenNumbersV2(
  numbers: number[],
  way: number
): number[] {
  const result: number[] = [];
  const funcs = SwitchWays[way];

  for (const num of numbers) {
    // Bitwise & filters out even numbers
    result.push(...(num & 1 ? [num] : funcs(num)));
  }
  return result;
}

const splitter = (n: number) => {
  let half: number = (n / 2) | 0;
  const remainder: number = half % 2;
  if (!remainder) half--;
  return [half, n - half];
};

const SwitchWays: Record<number, (n: number) => number[]> = {
  0: splitter,
  1: (n: number) => [1, n - 1],
  2: (n: number) => splitAllEvenNumbersV2(Array(2).fill((n / 2) | 0), 2),
  3: (n: number) => Array(n).fill(1)
};

console.log(splitAllEvenNumbersV2([1, 10, 1, 3], 0));
console.log(splitAllEvenNumbersV2([1, 10, 1, 3], 1));
console.log(splitAllEvenNumbersV2([1, 10, 1, 3], 2));
console.log(splitAllEvenNumbersV2([1, 10, 1, 3], 3));
console.log(splitAllEvenNumbersV2([1, 1, 3, 8], 2));
