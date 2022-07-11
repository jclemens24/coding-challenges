/**
 * Determine whether the given string can be obtained by one concatenation of some string to itself.
 *
 * I personally like Version2 the best where ^ matches the beginning of a string. We then create a capture group (\w+) that matches any word char and the quantifier matches 1+ of preceeding token. From there \1 matches result of capture group 1, followed by the $ which tells regex end of string.
 * It is slightly faster when executing too!
 *
 * Version 1 came to me quickly though and for those of us that aren't great with RegEx probably prefer this solution. In order to determine a given string can be obtained by one concatentation of itself must be of equal length when split and therefore must be even number. It is easy to think that automatically excludes words of length 5 for example but add 5 and 5 together = 10. So `"chalkchalk" = true`.
 */

performance.mark('start-version-1');
const IsTandemRepeat = function (inputString: string): boolean {
  const half = inputString.length / 2;
  return inputString.slice(0, half) === inputString.slice(half);
};
performance.mark('end-version-1');

console.log(IsTandemRepeat('tandemtandem'));
console.log(IsTandemRepeat('qqq'));
console.log(IsTandemRepeat('tandetande'));

performance.mark('start-version-2');
const IsTandemRepeatV2 = (inputString: string): boolean => {
  return /^(\w+)\1$/.test(inputString);
};
performance.mark('end-version-2');

performance.measure('version-1', {
  start: 'start-version-1',
  end: 'end-version-1'
});
performance.measure('version-2', {
  start: 'start-version-2',
  end: 'end-version-2'
});
console.log(performance.getEntriesByType('measure'));

console.log(IsTandemRepeatV2('tandemtandem'));
console.log(IsTandemRepeatV2('qqq'));

function IsTandemRepeatV3(inputString: string): boolean {
  const lenOfStr = inputString.length;

  return (
    lenOfStr % 2 === 0 &&
    inputString.substring(0, lenOfStr / 2) ===
      inputString.substring(lenOfStr / 2, lenOfStr)
  );
}

console.log(IsTandemRepeatV3('tandemtandem'));
console.log(IsTandemRepeatV3('qqq'));
