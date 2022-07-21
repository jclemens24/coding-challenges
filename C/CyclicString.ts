/**
 * You're given a substring `s` of some cyclic string. What's the length of the smallest possible string that can be concatenated to itself many times to obtain this cyclic string?
 * 
 * Example

For `s = "cabca"`, the output should be
`solution(s) = 3`.

`"cabca"` is a substring of a cycle string `"abcabcabcabc..."` that can be obtained by concatenating `"abc"` to itself. Thus, the answer is `3`.
 */

const CyclicString = (s: string): number => {
  const CheckSub = (sub: string[], candidate: string[]) => {
    for (let i = 0; i < candidate.length; i++) {
      if (candidate[i] !== sub[i % sub.length]) {
        return false;
      }
    }
    return true;
  };

  const arr = s.split('');
  for (let i = 1; i < arr.length; i++) {
    if (CheckSub(arr.slice(0, i), arr.slice(i))) {
      return i;
    }
  }
  return arr.length;
};

console.log(CyclicString('cabca'));

const CyclicStringV2 = (s: string): number => {
  let i = 1;

  while (s.slice(0, i).repeat(s.length).slice(0, s.length) !== s) {
    console.log(s.slice(0, i).repeat(s.length).slice(0, s.length));
    i++;
  }
  return i;
};

console.log(CyclicStringV2('cabca'));

const CyclicStringV3 = (s: string): number => {
  for (let i = 1; i < s.length; i++) {
    if (s.indexOf(s.substring(i)) === 0) return i;
  }
  return s.length;
};

console.log(CyclicStringV3('cabca'));

const CyclicStringV4 = (s: string, i: number = 1): number => {
  return s.startsWith(s.slice(i)) ? i : CyclicStringV4(s, ++i);
};

console.log(CyclicStringV4('cabca'));
