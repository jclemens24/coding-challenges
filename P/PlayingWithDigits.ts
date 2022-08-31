/**
 *
 */

export class G964 {
  public static digPow = (n: number, p: number) => {
    let power = p;
    const nums = [...`${n}`].reduce((prev, curr) => {
      return prev + Math.pow(+curr, power++);
    }, 0);
    const k = Math.floor(nums / n);
    if (k * n === nums) return k;
    return -1;
  };
}

console.log(G964.digPow(89, 1));
console.log(G964.digPow(92, 1));
console.log(G964.digPow(695, 2));
console.log(G964.digPow(46288, 3));
console.log(G964.digPow(114, 3));

export function sumArray(array: number[] | null): number {
  if (!array || array.length === 0 || array.length === 1) {
    return 0;
  }
  const max = Math.max(...array);
  const min = Math.min(...array);

  return array.reduce((prev, curr) => prev + curr, 0) - max - min;
}

console.log(sumArray([6, 2, 1, 8, 10]));

export function checkCoupon(
  enteredCode: string,
  correctCode: string,
  currentDate: string,
  expirationDate: string
): boolean {
  if (enteredCode !== correctCode) return false;
  const currDate = new Date(currentDate);
  const expDate = new Date(expirationDate);
  if (currDate.getTime() > expDate.getTime()) {
    return false;
  }
  return true;
}

console.log(checkCoupon('123', '123', 'July 9, 2015', 'July 9, 2015'));
console.log(checkCoupon('123', '123', 'July 9, 2015', 'July 2, 2015'));
console.log(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'));
console.log(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014'));
