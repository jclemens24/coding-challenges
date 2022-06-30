function BuildPalindrome(st: string): string {
  const isPalindrome = (s: string[]): boolean =>
    s.join('') === s.reverse().join('');
  const splitStr = st.split('');
  for (let i = 0; i < st.length; i++) {
    if (isPalindrome([...splitStr])) break;
    splitStr.splice(st.length, 0, splitStr[i]);
    console.log(splitStr);
  }
  return splitStr.join('');
}

console.log(BuildPalindrome('abcdc'));

function BuildPalindromeV2(st: string): string {
  const isPalindrome = (s: string) => s === Array.from(s).reverse().join('');
  if (isPalindrome(st)) return st;
  for (let i = 0; i < st.length; i++) {
    if (isPalindrome(st.slice(i, st.length))) {
      return st + Array.from(st.slice(0, i)).reverse().join('');
    }
  }
  return '';
}

console.log(BuildPalindromeV2('abcdc'));
