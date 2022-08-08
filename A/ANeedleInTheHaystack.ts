/**
 * Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

```
["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
```
 */

export function findNeedle(haystack: any[]): string {
  const index = haystack.findIndex((element) => element === 'needle');
  if (index !== -1) {
    return `found the needle at position ${index}`;
  }
  return '';
}

console.log(
  findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
);
console.log(
  findNeedle([
    '3',
    '123124234',
    null,
    'needle',
    'world',
    'hay',
    2,
    '3',
    true,
    false
  ])
);

export function findNeedleV2(haystack: any[]): string {
  return 'found the needle at position ' + haystack.indexOf('needle');
}
