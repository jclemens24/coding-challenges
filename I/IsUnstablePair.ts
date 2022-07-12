/**
 *Some file managers sort filenames taking into account case of the letters, others compare strings as if all of the letters are of the same case. That may lead to different ways of filename ordering.

Call two filenames an unstable pair if their ordering depends on the case.

To compare two filenames a and b, find the first position i at which a[i] ≠ b[i]. If a[i] < b[i], then a < b. Otherwise a > b. If such position doesn't exist, the shorter string goes first.

Given two filenames, check whether they form an unstable pair.

This one is pretty straightforward, I just implemented the rules in the description. For IsUnstablePair('aa', 'AAB') the left side of the strict inequality check filename1 < filename2 resolves to false. The right side resolves to true when both are converted to lowercase. That leaves false !== true which is ..... true ! This satisfies the given rules above. Check out the below console.log() if you need to
 */

console.log('aa' < 'AAB');
console.log('aa'.toLowerCase() < 'AAB'.toLowerCase());
console.log('aa' < 'AAB' !== 'aa'.toLowerCase() < 'AAB'.toLowerCase());

const IsUnstablePair = function (
  filename1: string,
  filename2: string
): boolean {
  return (
    filename1 < filename2 !== filename1.toLowerCase() < filename2.toLowerCase()
  );
};

console.log(IsUnstablePair('aa', 'AAB'));
console.log(IsUnstablePair('A', 'z'));
