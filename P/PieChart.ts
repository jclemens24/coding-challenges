/** 
 * DESCRIPTION:
We are to draw a pie chart! Our parameter shall be given in JSON.

The goal of this kata is to return a JSON containing each key with it corresponding angle to two decimal places when necessary.

Example

  1. Parameter {"Hausa": 4, "Yoruba" : 5, "Igbo" : 6, "Efik" : 1, "Edo" : 4} should return a JSON like {"Hausa":72,"Yoruba":90,"Igbo":108,"Efik":18,"Edo":72}
  2. Parameter {"English": 4, "Polish" : 12, "Russian" : 10, "Spanish" : 2} should return a JSON like {"English":51.43,"Polish":154.29,"Russian":128.57,"Spanish":25.71}
  3. Parameter {"Android": 500, "iOS" : 270, "Microsoft" : 230} should return a JSON like {"Android":180,"iOS":97.2,"Microsoft":82.8}
*/

export function pieChart(obj: string): string {
  const toObj: { [key: string]: number } = JSON.parse(obj);
  const entries = Object.entries(toObj);
  const total = entries.reduce((acc, curr) => acc + curr[1], 0);
  const percentages = entries.map((entry) => [
    entry[0],
    +((entry[1] / total) * 360).toFixed(2)
  ]);
  const finalObj = Object.fromEntries(percentages);
  return JSON.stringify(finalObj);
}

console.log(
  pieChart('{"English": 4, "Polish" : 12, "Russian" : 10, "Spanish" : 2}')
);
console.log(
  pieChart('{"Hausa": 4, "Yoruba" : 5, "Igbo" : 6, "Efik" : 1, "Edo" : 4}')
);

export function pieChartV2(obj: string): string {
  const parsedObj: { [key: string]: number } = JSON.parse(obj);
  const total = Object.values(parsedObj).reduce((acc, curr) => acc + curr, 0);
  for (const key in parsedObj) {
    parsedObj[key] = Math.round((parsedObj[key] * 36000) / total) / 100;
  }
  return JSON.stringify(parsedObj);
}
