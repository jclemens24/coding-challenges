export function canArrangeToPalindrome(inputString: string): boolean {
  return (
    inputString
      .split('')
      .sort()
      .join('')
      .replace(/(\w)\1/g, '').length < 2
  );
}

console.log(canArrangeToPalindrome('aabb'));

export function canArrangeToPalindromeV2(inputString: string): boolean {
  const splitInputString: string[] = inputString.split('').sort();
  let i: number = 0;
  console.log(splitInputString);
  while (splitInputString.length) {
    const char = splitInputString.shift();
    console.log(char);
    if (char === splitInputString[0]) splitInputString.shift();
    else i++;
    console.log(i);
  }
  return i < 2;
}

console.log(canArrangeToPalindromeV2('bbaa'));
console.log(canArrangeToPalindromeV2('racecar'));
