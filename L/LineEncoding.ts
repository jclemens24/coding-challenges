function LineEncoding(s: string): string {
  return s.replace(/(.)\1*/g, (chars: string, next: string) =>
    next === chars ? next : chars.length + next
  );
}

console.log(LineEncoding('aabbbc'));

function LineEncodingV2(s: string): string {
  let count: number = 1;
  let ans: string = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      if (count > 1) ans += count + s[i];
      else ans += s[i];
      count = 1;
    }
  }
  return ans;
}

console.log(LineEncodingV2('aaabbbbbc'));
