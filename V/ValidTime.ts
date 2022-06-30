/* Check if the given string is a correct time rep of the 24-hour clock

time = "13:58" = true

Input will be a string in "HH:MM" format
returns - boolean
*/

/**
 * Checks a given string correctly represents the 24-hour clock
 *
 * @param {string} time - A string in the format of "HH:MM"
 * @returns boolean
 */

const isValidTime = function (time: string): boolean {
  const timeArr = time.split(':').map((el) => parseInt(el));
  return timeArr[0] <= 23 && timeArr[1] <= 59;
};

console.log(isValidTime('13:58'));
console.log(isValidTime('25:51'));
console.log(isValidTime('02:76'));
console.log(isValidTime('24:00'));
