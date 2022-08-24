/**
 * Example 1:
 * 
`a1 = ["arp", "live", "strong"]`

`a2 = ["lively", "alive", "harp", "sharp", "armstrong"]`

returns `["arp", "live", "strong"]`

Example 2:

`a1 = ["tarp", "mice", "bull"]`

`a2 = ["lively", "alive", "harp", "sharp", "armstrong"]`

returns `[]`

Notes:

1. Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.

2. In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.

Beware: r must be without duplicates.
 */

export function inArray(a1: string[], a2: string[]): string[] {
  const r: string[] = [];
  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
      if (a2[j].includes(a1[i])) {
        r.push(a1[i]);
      }
    }
  }
  return Array.from(new Set(r)).sort();
}

console.log(
  inArray(
    ['arp', 'live', 'strong'],
    ['lively', 'alive', 'harp', 'sharp', 'armstrong']
  )
);

console.log(
  inArray(
    ['tarp', 'mice', 'bull'],
    ['lively', 'alive', 'harp', 'sharp', 'armstrong']
  )
);

/* I probably could have shortened my solution a bit (always refactor) but I already submitted this. Here is my attempt. */

export function inArrayV2(a1: string[], a2: string[]): string[] {
  return [
    ...new Set(
      a1.filter((a1Str) => a2.some((a2Str) => a2Str.includes(a1Str))).sort()
    )
  ];
}

console.log(
  inArrayV2(
    ['arp', 'live', 'strong'],
    ['lively', 'alive', 'harp', 'sharp', 'armstrong']
  )
);

console.log(
  inArrayV2(
    ['tarp', 'mice', 'bull'],
    ['lively', 'alive', 'harp', 'sharp', 'armstrong']
  )
);

export function inArrayV3(a1: string[], a2: string[]): string[] {
  const matchedSet = new Set<string>();

  for (const a of a1) {
    for (const b of a2) {
      if (b.includes(a)) {
        matchedSet.add(a);
      }
    }
  }
  return Array.from(matchedSet).sort();
}
