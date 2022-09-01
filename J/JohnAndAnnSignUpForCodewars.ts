/**
 * John and his wife Ann have decided to go to Codewars. On the first day Ann will do one kata and John - he wants to know how it is working - 0 kata.

Let us call a(n) - and j(n) - the number of katas done by Ann - and John - at day n. We have a(0) = 1 and in the same manner j(0) = 0.

They have chosen the following rules:

  1. On day n the number of katas done by Ann should be n minus the number of katas done by John at day t, t being equal to the number of katas done by Ann herself at day n - 1

  2. On day n the number of katas done by John should be n minus the number of katas done by Ann at day t, t being equal to the number of katas done by John himself at day n - 1

Whoops! I think they need to lay out a little clearer exactly what there're getting themselves into!

Could you write:
functions ann(n) and john(n) that return the list of the number of katas Ann/John does on the first n days;
functions sum_ann(n) and sum_john(n) that return the total number of katas done by Ann/John on the first n days
Examples:

```
john(11)  -->  [0, 0, 1, 2, 2, 3, 4, 4, 5, 6, 6]
ann(6)    -->  [1, 1, 2, 2, 3, 3]

sum_john(75)  -->  1720
sum_ann(150)  -->  6930
```

Note:
Keep an eye on performance.
 */

type KataScheduleBuilder = {
  john: number[];
  ann: number[];
};

function numberOfKatas(n: number): KataScheduleBuilder {
  const john = [0];
  const ann = [1];
  for (let i = 1; i < n; i++) {
    john.push(i - ann[john[i - 1]]);
    ann.push(i - john[ann[i - 1]]);
  }
  return { john, ann };
}

export function john(n: number): number[] {
  return numberOfKatas(n).john;
}
export function ann(n: number): number[] {
  return numberOfKatas(n).ann;
}
export function sumJohn(n: number): number {
  return john(n).reduce((acc, curr) => acc + curr, 0);
}
export function sumAnn(n: number): number {
  return ann(n).reduce((acc, curr) => acc + curr, 0);
}

export function parseF(s: string): number | null {
  return isNaN(parseFloat(s)) ? null : parseFloat(s);
}

console.log(parseF('1'));
console.log(parseF('true'));
console.log(parseF('0'));

export function smallEnough(a: number[], limit: number): boolean {
  return a.every((val) => val <= limit);
}

export function remove(s: string): string {
  return s.replace(/(!$)/g, '');
}

console.log(remove('Hi!!'));

export function switchItUp(intNumber: number): string {
  const numMap: { [key: number]: string } = {
    0: 'Zero',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine'
  };
  return numMap[intNumber];
}
