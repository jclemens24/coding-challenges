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

interface Profile {
  name: string;
  age: number;
  bio: string;
}

export const rateProfile = (
  profile: Profile,
  swipeLeft: () => void,
  swipeRight: () => void
): void => {
  if (profile.bio.includes('TypeScript')) {
    swipeRight();
    return;
  }
  swipeLeft();
};
const profile: Profile = {
  name: 'Peter Parker',
  age: 31,
  bio: 'Huge soccer fan ⚽️ Living in Dallas. Python = ❤️'
};

const profile2: Profile = {
  name: 'Julia Green',
  age: 24,
  bio: 'From Chile. Sushi lover 🍣 Learning TypeScript on codewars.com. Always be yourself. Unless you can be a unicorn, then always be a unicorn 🦄'
};

const swipeRight = () => {
  console.log('Executing Swipe Right. You Matched!');
};
const swipeLeft = () => {
  console.log('Executing Swipe Left. Keep searching...');
};
rateProfile(profile, swipeLeft, swipeRight);
rateProfile(profile2, swipeLeft, swipeRight);

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
