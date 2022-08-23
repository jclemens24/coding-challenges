/**
 * You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have `"***"` between each of its letters.

You should not remove or add elements from/to the array.
 */

export function twoSort(s: string[]): string {
  const asciiSorted = s.sort();
  return asciiSorted[0]
    .split('')
    .map((str, i) =>
      i !== asciiSorted[0].length - 1 ? str.padEnd(4, '*') : str
    )
    .join('');
}

console.log(
  twoSort([
    'bitcoin',
    'take',
    'over',
    'the',
    'world',
    'maybe',
    'who',
    'knows',
    'perhaps'
  ])
);

console.log(
  twoSort([
    'turns',
    'out',
    'random',
    'test',
    'cases',
    'are',
    'easier',
    'than',
    'writing',
    'out',
    'basic',
    'ones'
  ])
);

console.log(
  twoSort(['Lets', 'all', 'go', 'on', 'holiday', 'somewhere', 'very', 'cold'])
);
