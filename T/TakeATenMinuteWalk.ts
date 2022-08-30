/**
 * You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
 */

export function isValidWalk(walk: string[]) {
  const dirCount = (dir: string) => walk.filter((val) => val === dir).length;

  return (
    walk.length === 10 &&
    dirCount('n') === dirCount('s') &&
    dirCount('w') === dirCount('e')
  );
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
console.log(
  isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'])
);
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));

export function isValidWalkV2(walk: string[]): boolean {
  if (walk.length !== 10) return false;

  const coords = {
    x: 0,
    y: 0
  };

  for (let i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n':
        coords.x++;
        break;
      case 's':
        coords.x--;
        break;
      case 'e':
        coords.y++;
        break;
      case 'w':
        coords.y--;
        break;
      default:
        break;
    }
  }
  return !coords.x && !coords.y;
}

console.log(isValidWalkV2(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
console.log(
  isValidWalkV2(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'])
);
console.log(isValidWalkV2(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
