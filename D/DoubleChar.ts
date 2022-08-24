/**
 * Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
```
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
```
 */

export function doubleChar(str: string): string {
  return [...str].map((ltr) => `${ltr}${ltr}`).join('');
}

console.log(doubleChar('String'));
console.log(doubleChar('Hello World'));

export function doubleCharV2(str: string): string {
  return str
    .split('')
    .map((str) => str.repeat(2))
    .join('');
}

console.log(doubleCharV2('String'));
console.log(doubleCharV2('Hello World'));

/**
 * 
 * @param num - integer of dogs
 * @return {string} a string from the dogs[] based upon `num` of dogs
 * 
 * Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

The number of dogs will always be a number and there will always be at least 1 dog.

Good luck!
 */
export function howManyDalmatians(num: number): string {
  const dogs = [
    'Hardly any',
    'More than a handful!',
    "Woah that's a lot of dogs!",
    '101 DALMATIANS!!!'
  ];

  const respond = (number: number) =>
    number < 10
      ? dogs[0]
      : number <= 50
      ? dogs[1]
      : number === 101
      ? dogs[3]
      : dogs[2];

  return respond(num);
}
