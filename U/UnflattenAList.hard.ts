/* eslint-disable no-unused-vars */
/**
 *
 */

const enum DIRECTION {
  LEFT = 0,
  RIGHT = 1
}

const remove = (list: any[], dir: DIRECTION) => {
  return dir === DIRECTION.LEFT ? list.shift() : list.pop();
};

const add = (list: any[], element: any, dir: DIRECTION): void => {
  dir === DIRECTION.LEFT ? list.push(element) : list.unshift(element);
};

export const makeUnflat = (list: any[], dir: DIRECTION) => {
  const flatList = [...list];
  const unflat: Array<number | number[]> = [];

  while (flatList.length > 0) {
    const element = remove(flatList, dir);
    if (Number.isInteger(element)) {
      const left = flatList.length + 1;
      let remainder = element % left || 1;

      if (remainder < 3) {
        add(unflat, element, dir);
      } else {
        const subarray: number[] = [element];
        while (--remainder > 0 && flatList.length > 0) {
          add(subarray, remove(flatList, dir), dir);
        }
        add(unflat, subarray, dir);
      }
    } else {
      add(unflat, makeUnflat(element, dir), dir);
    }
  }
  return unflat;
};

export function unflatten(
  flatArray: any[],
  depth: number,
  begin: number = 0
): any[] {
  let unflat: any[] = [...flatArray];

  for (let i = begin; i < depth; i++) {
    const dir: DIRECTION = i % 2;
    unflat = makeUnflat(unflat, dir);
  }
  return unflat;
}

console.log(unflatten([4, 5, 1, 7, 1], 2));

console.log(
  'string'
    .split('')
    .map((char, i, arr) => (i !== arr.length - 1 ? char + '\u0336' : char))
    .join('')
);

console.log('-'.charCodeAt(0));
console.log((45).toString(16));
console.log(parseInt('2d', 16));

export {};
