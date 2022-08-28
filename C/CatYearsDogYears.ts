/**
 * Kata Task
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
 */

export function humanYearsCatYearsDogYears(
  humanYears: number
): [number, number, number] {
  let dogs = 0;
  let cats = 0;

  for (let i = 1; i <= humanYears; i++) {
    if (i === 1) {
      dogs += 15;
      cats += 15;
    } else if (i === 2) {
      dogs += 9;
      cats += 9;
    } else {
      cats += 4;
      dogs += 5;
    }
  }
  return [humanYears, cats, dogs];
}

console.log(humanYearsCatYearsDogYears(1));
console.log(humanYearsCatYearsDogYears(10));

export function humanYearsCatYearsDogYearsV2(
  humanYears: number
): [number, number, number] {
  const cats = 15 + (humanYears > 1 ? 9 + 4 * (humanYears - 2) : 0);
  const dogs = 15 + (humanYears > 1 ? 9 + 5 * (humanYears - 2) : 0);
  return [humanYears, cats, dogs];
}

console.log(humanYearsCatYearsDogYearsV2(1));
console.log(humanYearsCatYearsDogYearsV2(10));
