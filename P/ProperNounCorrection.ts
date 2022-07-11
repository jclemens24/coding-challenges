/**
 *Proper nouns always begin with a capital letter, followed by small letters.

Correct a given proper noun so that it fits this statement.
 */

const ProperNoun = function (noun: string): string {
  return `${noun[0]}`.toUpperCase() + noun.slice(1).toLowerCase();
};

console.log(ProperNoun('paRis'));
console.log(ProperNoun('John'));

const ProperNounV2 = (noun: string): string => {
  const toArr = [...noun];
  return toArr[0].toUpperCase() + toArr.slice(1).join('').toLowerCase();
};

console.log(ProperNounV2('paRis'));
console.log(ProperNounV2('John'));

const ProperNounV3 = (noun: string): string => {
  return noun.substring(0, 1).toUpperCase() + noun.substring(1).toLowerCase();
};

console.log(ProperNounV3('paRis'));
console.log(ProperNounV3('John'));
