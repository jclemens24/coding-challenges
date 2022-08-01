/**
 * Benjamin recently bought a digital clock at a magic trick shop. The seller never told Ben what was so special about it, but mentioned that one day Benjamin would be faced with a surprise.

Indeed, the clock did surprise Benjamin: without warning, at someTime the clock suddenly started going in the opposite direction! Unfortunately, Benjamin has an important meeting very soon, and knows that at leavingTime he should leave the house so as to not be late. Ben spent all his money on the clock, so has to figure out what time his clock will show when it's time to leave.

Given the someTime at which the clock started to go backwards, find out what time will be shown on the curious clock at leavingTime.

For your convenience, here is the list of months lengths (from January to December, respectively):

Months lengths: 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31.
Please, note that in leap years February has 29 days.
 */

function CuriousClock(someTime: string, leavingTime: string): string {
  const time1 = new Date(someTime).getTime();
  console.log(time1);

  const time2 = new Date(leavingTime).getTime();
  console.log(time2);

  const timeAvg = time1 * 2 - time2;
  return new Date(timeAvg).toISOString().replace('T', ' ').slice(0, 16);
}

console.log(CuriousClock('2016-08-26 22:40', '2016-08-29 10:00'));
