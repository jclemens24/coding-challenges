/**
 * Given an array `(arr)` as an argument complete the function `countSmileys` that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as `:` or `;`
A smiley face can have a nose but it does not have to. Valid characters for a nose are `-` or `~`
Every smiling face must have a smiling mouth that should be marked with either `)` or `D`
No additional characters are allowed except for those mentioned.

Valid smiley face examples: `:) :D ;-D :~)`
Invalid smiley faces: `;( :> :} :]`

Example
```
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
```
Note
In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.
 * 
 * 
 * @param arr - an array of valid or invalid smiley faces
 * @returns the number of valid smiley faces according to the above rules
 */

// return the total number of smiling faces in the array
export function countSmileys(arr: string[]) {
  return arr.filter((face) => face.match(/(:|;)(-|~)?(\)|D)/g)).length;
}

console.log(countSmileys([':D', ':~)', ';~D', ':)']));
console.log(countSmileys([]));

export function countSmileysV2(arr: string[]): number {
  const regexp = /[:;]{1}[-~]{0,1}[)D]{1}/;

  return arr.filter((face) => regexp.test(face)).length;
}

console.log(countSmileysV2([':D', ':~)', ';~D', ':)']));
console.log(countSmileysV2([]));

// We can even break all these checks up into their own functions

export function countSmileysV3(arr: string[]): number {
  let validCount: number = 0;

  for (const symbols of arr) {
    if (symbols.length === 2) {
      if (eyesHelper(symbols.charAt(0)) && mouthHelper(symbols.charAt(1))) {
        validCount += 1;
      }
    } else if (symbols.length === 3) {
      if (
        eyesHelper(symbols.charAt(0)) &&
        noseHelper(symbols.charAt(1)) &&
        mouthHelper(symbols.charAt(2))
      ) {
        validCount++;
      }
    }
  }
  return validCount;
}

function eyesHelper(char: string): boolean {
  return char === ';' || char === ':';
}

function noseHelper(char: string): boolean {
  return char === '-' || char === '~';
}

function mouthHelper(char: string): boolean {
  return char === ')' || char === 'D';
}

console.log(countSmileysV3([':D', ':~)', ';~D', ':)']));
console.log(countSmileysV3([]));
