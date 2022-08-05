/**
 * Find The Unique String 5kyu
 * 
 * DESCRIPTION:
There is an array of strings. All strings contains similar letters except one. Try to find it!

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 2 strings.
 */
export function findUniq(arr: string[]): string {
  const strArr = arr.map((a) => [...new Set(a.toLowerCase())].sort().join(''));
  console.log(strArr);
  return arr.find(
    (_, i) => strArr.indexOf(strArr[i]) === strArr.lastIndexOf(strArr[i])
  )!;
}

console.log(findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a']));
