/**
 * You are given an array of integers that you want distribute between several groups. The first group should contain numbers from 1 to 104, the second should contain those from 104 + 1 to 2 * 104, ..., the 100th one should contain numbers from 99 * 104 + 1 to 106 and so on.

All the numbers will then be written down in groups to the text file in such a way that:

the groups go one after another;
each non-empty group has a header which occupies one line;
each number in a group occupies one line.
Calculate how many lines the resulting text file will have.

Using a new Set is a fantastic idea here because Sets maintain unique values. Dividing by 10000 
will still help us organize values into their groups while discarding duplicates. We don't really care how many numbers are in each group, just that they are organized into one. From there we return
the Set().size + a.length : 4 groups and 7 numbers = 11 lines
 */

const NumbersGrouping = function (a: number[]): number {
  return new Set(a.map((val) => Math.ceil(val / 10000))).size + a.length;
};

console.log(NumbersGrouping([20000, 239, 10001, 999999, 10000, 20566, 29999]));
console.log(
  NumbersGrouping([
    10000, 20000, 30000, 40000, 50000, 60000, 10000, 120000, 150000, 200000,
    300000, 1000000, 10000000, 100000000, 10000000
  ])
);
