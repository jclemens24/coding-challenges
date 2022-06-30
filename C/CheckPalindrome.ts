export function isPalindrome(inputStr: string): boolean {
  const strArr = inputStr.split('');
  const reversedStr = strArr.reverse().join('');
  return reversedStr === inputStr;
}
