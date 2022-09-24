/* eslint-disable no-unused-vars */
export function dirReduc(arr: string[]): string[] {
  enum Direction {
    N = 'NORTH',
    S = 'SOUTH',
    W = 'WEST',
    E = 'EAST'
  }

  const isDirection = (s: string): s is Direction =>
    Object.values(Direction).includes(s as unknown as Direction);

  const dir = (s: string): Direction => {
    if (isDirection(s)) {
      return s;
    }
    throw new Error('Not a direction');
  };

  const opp = {
    [Direction.N]: Direction.S,
    [Direction.S]: Direction.N,
    [Direction.W]: Direction.E,
    [Direction.E]: Direction.W
  };

  const look = <T>(array: T[]): T | undefined => array[array.length - 1];

  const reduce = (list: Direction[]) => (dir: Direction) => {
    const last: Direction | undefined = look(list);
    if (last !== undefined && dir === opp[last]) {
      list.pop();
    } else {
      list.push(dir);
    }
  };

  const a: Direction[] = [...arr].map(dir);
  if (a.length <= 1) {
    return a;
  }
  const stack: Direction[] = [a.shift()!];
  a.forEach(reduce(stack));
  return stack;
}

console.log(
  dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'])
);

export function dirReducV2(arr: string[]): string[] {
  const Opposites: Record<string, string> = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    EAST: 'WEST',
    WEST: 'EAST'
  };

  const stack = [];

  for (const dir of arr) {
    stack[stack.length - 1] === Opposites[dir] ? stack.pop() : stack.push(dir);
  }
  return stack;
}

console.log(
  dirReducV2(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'])
);
