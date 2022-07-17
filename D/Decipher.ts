/**
 * Consider the following ciphering algorithm:

  * For each character replace it with its code.
  * Concatenate all of the obtained numbers.

Given a ciphered string, return the initial one if it is known that it consists only of lowercase letters.

Note: here the character's code means its decimal ASCII code, the numerical representation of a character used by most modern programming languages.

Decipher Version 1, I created a RegExpMatchArray that looks for number ranges between 97 and 129 (noting that 'z' stops at 122). Each match is then mapped and converted to a number, held inside the codes array. After that, we spread each codes element to be evaluated by .fromCharCode() which returns our deciphered string.

DecipherV2 splits each string element. We use .reduce, taking note that we supply an initial value that is shaped as an object with the properties { result: '', code: '' }. The reduce adds each string together until it satisfies the if-statement (code >= 97 && code <= 122) and then add that to the result string. We must result .code to be an empty string after a range match. I admittedly found Version2 solution and then transcribed it here but did not come up with it myself as I did Version 1.
 */

const Decipher = (cipher: string): string => {
  const matches = cipher.match(/9[7-9]?|1[0-2][0-9]/g);
  if (matches) {
    const codes = matches.map((str) => parseInt(str));
    return String.fromCharCode(...codes);
  }
  return '';
};

console.log(Decipher('10197115121'));
console.log(Decipher('98'));
console.log(Decipher('122'));
console.log(Decipher('1229897'));
console.log(
  Decipher(
    '97989910010110210310410510610710810911011111211311411511611711811912012112297'
  )
);

function DecipherV2(cipher: string): string {
  return cipher.split('').reduce(
    (prev, curr) => {
      prev.code += curr;
      const code = Number(prev.code);
      if (code >= 97 && code <= 122) {
        prev.result += String.fromCharCode(code);
        prev.code = '';
      }
      return prev;
    },
    { result: '', code: '' }
  ).result;
}

console.log(DecipherV2('10197115121'));
console.log(DecipherV2('98'));
console.log(DecipherV2('122'));
console.log(DecipherV2('1229897'));
console.log(
  DecipherV2(
    '97989910010110210310410510610710810911011111211311411511611711811912012112297'
  )
);

function DecipherV3(cipher: string): string {
  return String.fromCharCode(
    ...(cipher.match(/1..|../g)?.map((str) => Number(str)) || [])
  );
}

console.log(DecipherV3('10197115121'));
console.log(DecipherV3('98'));
console.log(DecipherV3('122'));
console.log(DecipherV3('1229897'));
console.log(
  DecipherV3(
    '97989910010110210310410510610710810911011111211311411511611711811912012112297'
  )
);
