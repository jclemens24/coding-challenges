/**
 *
 */

export function findTheNotFittingElement(series: any[]): any {
  const isEqual: any[] = [];
  const type: any[] = [];
  const isEven: any[] = [];
  const sign: any[] = [];
  const uppercase: any[] = [];
  const isAlpha: any[] = [];

  const isUnique = [isEqual, type, isEven, sign, uppercase, isAlpha];

  series.forEach((val) => {
    if (series.filter((v) => v === val).length === 1) {
      isEqual.push(val);
    }
    if (series.filter((v) => typeof val === typeof v).length === 1) {
      type.push(val);
    }
    if (series.filter((v) => (val % 2 === 0) === (v % 2 === 0)).length === 1) {
      isEven.push(val);
    }
    if (
      series.filter((v) => (+val > 0 ? 1 : -1) === (+v > 0 ? 1 : -1)).length ===
      1
    ) {
      sign.push(val);
    }
    if (
      series.filter(
        (v) => (val === `${val}`.toUpperCase()) === (v === `${v}`.toUpperCase())
      ).length === 1
    ) {
      uppercase.push(val);
    }
    if (
      series.filter((v) => /[a-z]/i.test(`${val}`) === /[a-z]/i.test(`${v}`))
        .length === 1
    ) {
      isAlpha.push(val);
    }
  });
  console.log(isUnique);
  return isUnique.filter((subarray) => subarray.length === 1)[0][0];
}

console.log(findTheNotFittingElement(['Z', 'L', 'P', 't', 'G']));
