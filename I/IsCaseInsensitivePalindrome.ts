/**
 * Given a string, check if it can become a palindrome through a case change of some (possibly, none) letters.
 */

function IsCaseInsensitivePalindrome(inputString: string): boolean {
  return (
    inputString.toLowerCase() ===
    [...inputString].reverse().join('').toLowerCase()
  );
}

console.log(IsCaseInsensitivePalindrome('Aabaa'));
console.log(IsCaseInsensitivePalindrome('abac'));

const IsCaseInsensitivePalindromeV2 = (inputString: string): boolean => {
  const inputStringReversed = inputString.split('').reverse().join('');

  return inputString.toLowerCase() === inputStringReversed.toLowerCase();
};

console.log(IsCaseInsensitivePalindromeV2('Aabaa'));
console.log(IsCaseInsensitivePalindromeV2('abac'));
