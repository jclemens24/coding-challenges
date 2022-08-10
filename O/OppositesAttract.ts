/**
 * Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
 */

export function lovefunc(flower1: number, flower2: number): boolean {
  if ((flower1 % 2 && !(flower2 % 2)) || (!(flower1 % 2) && flower2 % 2))
    return true;
  return false;
}

console.log(lovefunc(1, 4));
console.log(lovefunc(2, 2));

// An easier solution

export function lovefuncV2(flower1: number, flower2: number): boolean {
  return flower1 % 2 !== flower2 % 2;
}

console.log(lovefuncV2(1, 4));
console.log(lovefuncV2(2, 2));
