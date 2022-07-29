/**
 * Whenever you decide to celebrate your birthday you always do this your favorite café, which is quite popular and as such usually very crowded. This year you got lucky: when you and your friend enter the café you're surprised to see that it's almost empty. The waiter lets slip that there are always very few people on this day of the week.

You enjoyed having the café all to yourself, and are now curious about the next time you'll be this lucky. Given the current birthdayDate, determine the number of years until it will fall on the same day of the week.

For your convenience, here is the list of months lengths (from January to December, respectively):

Months lengths: 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31.
Please, note that in leap years February has 29 days. If your birthday is on the 29th of February, you celebrate it once in four years. Otherwise you birthday is celebrated each year.

At first, I was tempted to use the months lengths as a reducer, only changing the value of february 28 if the year % 4 === 0. However, there is a lot you can do in JavaScript with dates in today's language. While version 1 seems to have some uneccessary variables (i.e: I didn't need a dayMap), it got the job done. Version 2 is my own refactoring after I solved the problem with version 1.
 */

const DayOfWeek = (birthdayDate: string): number => {
  const bday = birthdayDate.split('-').map(Number);
  const birthday = new Date(birthdayDate);
  const dayMap: { [key: number]: string } = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  };

  const dayAimingFor = birthday.getDay();
  let foundDateFlag = false;
  let date: Date = new Date(`${bday[0]}-${bday[1]}-${bday[2]}`);
  while (!foundDateFlag) {
    const year = ++bday[2];
    date = new Date(`${bday[0]}-${bday[1]}-${year}`);
    const day = date.getDay();
    if (dayMap[day] === dayMap[dayAimingFor]) {
      if (date.getDate() === birthday.getDate()) {
        foundDateFlag = true;
      }
    }
  }
  return date.getFullYear() - birthday.getFullYear();
};

console.log(DayOfWeek('02-01-2016'));
console.log(DayOfWeek('02-29-2016'));
console.log(DayOfWeek('01-01-1900'));

const DayOfWeekV2 = (birthdayDate: string): number => {
  const birthday = new Date(birthdayDate);
  const day = birthday.getDay();
  let counter = 0;

  const step = birthday.getMonth() === 1 && birthday.getDate() === 29 ? 4 : 1;

  do {
    if (step === 4 && birthday.getFullYear() % 100 === 0) {
      birthday.setFullYear(birthday.getFullYear() + step, 1, 29);
    } else {
      birthday.setFullYear(birthday.getFullYear() + step);
    }
    counter += step;
  } while (!(birthday.getDay() === day && birthday.getFullYear() % 100 !== 0));

  return counter;
};

console.log(DayOfWeekV2('02-29-2016'));
