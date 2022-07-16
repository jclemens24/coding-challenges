/**
 *  Given a character, check if it represents an odd digit, an even digit or not a digit at all.
 */

function CharacterParity(symbol: string): string {
  const num = parseInt(symbol, 10);
  return isNaN(num) ? 'not a digit' : num % 2 ? 'odd' : 'even';
}

console.log(CharacterParity('5'));
console.log(CharacterParity('8'));
console.log(CharacterParity('q'));

function CharacterParityV2(symbol: string): string {
  return parseInt(symbol, 10) % 2 ? 'odd' : 'even';
}

console.log(CharacterParityV2('5'));
console.log(CharacterParityV2('8'));
console.log(CharacterParityV2('10'));
