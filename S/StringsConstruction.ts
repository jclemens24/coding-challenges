/**
 * Given two strings a and b, both consisting only of lowercase English letters, your task is to calculate how many strings equal to a can be constructed using only letters from the string b? Each letter can be used only once and in one string only.
 */

performance.mark('version-1-start');
function StringConstruction(a: string, b: string): number {
  let count = 0;

  while (count >= 0) {
    for (const str of a) {
      if (b.indexOf(str) < 0) return count;
      b = b.replace(str, '');
      console.log(`b: `, b);
      console.log(`count: `, count);
    }
    count++;
  }
  return count;
}
performance.mark('version-1-end');
performance.measure('measure', {
  start: 'version-1-start',
  end: 'version-1-end'
});
console.log(StringConstruction('abc', 'abccba'));
console.log(performance.getEntriesByType('measure'));

function StringConstructionV2(a: string, b: string): number {
  return Math.min(
    ...a
      .split('')
      .map((str) =>
        Math.floor((b.split(str).length - 1) / (a.split(str).length - 1))
      )
  );
}

console.log(StringConstructionV2('abc', 'abccba'));

function StringConstructionV3(a: string, b: string): number {
  const obj: { [key: string]: number } = {};
  for (let i = 0; i < a.length; i++) {
    if (obj[a[i]]) continue;
    const regexp = new RegExp(a[i], 'g');
    obj[a[i]] = Math.floor(
      (b.match(regexp) || []).length / (a.match(regexp) || []).length
    );
    if (!obj[a[i]]) return 0;
  }
  return Math.min(...Object.values(obj));
}

console.log(StringConstructionV3('abc', 'abccba'));
