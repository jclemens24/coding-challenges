/**
 * Task
King Arthur and his knights are having a New Years party. Last year Lancelot was jealous of Arthur, because Arthur had a date and Lancelot did not, and they started a duel.

To prevent this from happening again, Arthur wants to make sure that there are at least as many women as men at this year's party. He gave you a list of integers of all the party goers.

Arthur needs you to return true if he needs to invite more women or false if he is all set.

Input/Output
[input] integer array L ($a in PHP)
An array (guaranteed non-associative in PHP) representing the genders of the attendees, where -1 represents women and 1 represents men.

2 <= L.length <= 50

[output] a boolean value

true if Arthur need to invite more women, false otherwise.
 */

export function inviteMoreWomen(L: number[]): boolean {
  const map: { [key: string]: number } = L.reduce(
    (acc: { [key: string]: number }, curr) => ({
      ...acc,
      [curr]: acc[curr] + 1 || 1
    }),
    {}
  );
  console.log(map);

  return map['1'] > (map['-1'] || 0);
}

console.log(inviteMoreWomen([1, -1, 1]));
console.log(inviteMoreWomen([1, 1, 1]));
console.log(inviteMoreWomen([-1, -1, -1]));
console.log(inviteMoreWomen([1, -1]));

export function inviteMoreWomenV2(L: number[]): boolean {
  const [men, women] = [1, -1].map((n) => L.filter((el) => el === n).length);
  console.log(men, women);
  return men > women;
}

console.log(inviteMoreWomenV2([1, -1, 1]));
console.log(inviteMoreWomenV2([1, 1, 1]));
console.log(inviteMoreWomenV2([-1, -1, -1]));
console.log(inviteMoreWomenV2([1, -1]));
