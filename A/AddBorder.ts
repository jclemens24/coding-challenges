/**
 * Given a rectangular matrix of characters, add a border of asterisks(*) to it.
 *
 *
 * @param picture Matrix of strings
 * @returns Matrix of strings with added border of '*'
 */

function AddBorder(picture: string[]): string[] {
  const frame: string = '*'.repeat(picture[0].length + 2);
  return [frame, ...picture.map((str) => `*${str}*`), frame];
}

console.log(AddBorder(['abc', 'ded']));

function AddBorderV2(picture: string[]): string[] {
  let border: string;
  return [(border = '*'.repeat(picture[0].length + 2))].concat(
    picture.map((str) => `*${str}*`),
    border
  );
}

console.log(AddBorderV2(['abc', 'ded']));

function AddBorderV3(picture: string[]): string[] {
  let snapshot: string[] = [...picture];

  const border: string = '*'.repeat(picture[0].length + 2);
  snapshot = snapshot.map((str) => `*${str}*`);
  snapshot.push(border);
  snapshot.unshift(border);
  return snapshot;
}

console.log(AddBorderV3(['abc', 'ded', 'zib']));
