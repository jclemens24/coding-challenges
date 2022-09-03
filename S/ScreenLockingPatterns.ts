/* eslint-disable no-unused-vars */
const CONNECTIONS = {
  A: ['B', 'CB', 'D', 'E', 'F', 'GD', 'H', 'IE'],
  B: ['A', 'C', 'D', 'E', 'F', 'G', 'HE', 'I'],
  C: ['B', 'AB', 'D', 'E', 'F', 'GE', 'H', 'IF'],
  D: ['A', 'B', 'C', 'E', 'FE', 'G', 'H', 'I'],
  E: ['A', 'B', 'C', 'D', 'F', 'G', 'H', 'I'],
  F: ['A', 'B', 'C', 'DE', 'E', 'G', 'H', 'I'],
  G: ['AD', 'B', 'CE', 'D', 'E', 'F', 'H', 'IH'],
  H: ['A', 'BE', 'C', 'D', 'E', 'F', 'G', 'I'],
  I: ['AE', 'B', 'CF', 'D', 'E', 'F', 'GH', 'H']
};

export function calculateCombinations(
  startPosition: string,
  patternLength: number
): number {
  let total = 0;
  if (startPosition.length > patternLength) return total;
  if (startPosition.length === patternLength) return total + 1;
  const last = startPosition.slice(-1) as keyof typeof CONNECTIONS;
  const checkPossibles = possiblePosition(last, startPosition);
  if (startPosition.length + 1 === patternLength) return checkPossibles.length;
  for (const position of checkPossibles) {
    total += calculateCombinations(startPosition + position, patternLength);
  }
  return total;
}

function possiblePosition(point: keyof typeof CONNECTIONS, visited: string) {
  return CONNECTIONS[point].reduce((acc: string[], curr) => {
    const [dest, over] = curr.split('');
    if (
      visited.indexOf(dest) === -1 &&
      (!over || visited.indexOf(over) !== -1)
    ) {
      acc.push(dest);
    }
    return acc;
  }, []);
}

console.log(calculateCombinations('A', 10));
console.log(calculateCombinations('E', 4));

type Position = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I';

const Paths: {
  [key in Position]: Position[];
} = {
  A: ['B', 'F', 'E', 'H', 'D'],
  B: ['C', 'F', 'I', 'E', 'G', 'D', 'A'],
  C: ['F', 'H', 'E', 'D', 'B'],
  D: ['A', 'B', 'C', 'E', 'I', 'H', 'G'],
  E: ['A', 'B', 'C', 'D', 'F', 'G', 'H', 'I'],
  F: ['I', 'H', 'G', 'E', 'A', 'B', 'C'],
  G: ['D', 'B', 'E', 'F', 'H'],
  H: ['G', 'D', 'A', 'E', 'C', 'F', 'I'],
  I: ['H', 'D', 'E', 'B', 'F']
};

const overPath: {
  [key in Position]: Partial<{ [key in Position]: Position }>;
} = {
  A: {
    B: 'C',
    E: 'I',
    D: 'G'
  },
  B: {
    E: 'H'
  },
  C: {
    B: 'A',
    E: 'G',
    F: 'I'
  },
  D: {
    E: 'F'
  },
  E: {},
  F: {
    E: 'D'
  },
  G: {
    D: 'A',
    E: 'C',
    H: 'I'
  },
  H: {
    E: 'B'
  },
  I: {
    H: 'G',
    E: 'A',
    F: 'C'
  }
};

export function calculateCombinationsV2(
  startPosition: string,
  patternLength: number,
  passedPositions: Position[] = []
): number {
  if (patternLength === 0 || patternLength >= 10) return 0;
  if (patternLength === 1) return 1;

  passedPositions = [...passedPositions, startPosition as Position];
  const paths: Position[] = [];

  Paths[startPosition as Position].forEach((pos) => {
    const visited = passedPositions.includes(pos);

    if (!visited) {
      paths.push(pos);
    }

    const nextPosition = overPath[startPosition as Position][pos];
    if (visited && nextPosition) {
      if (!passedPositions.includes(nextPosition)) {
        paths.push(nextPosition);
      }
    }
  });

  let result: number = 0;
  for (const position of paths) {
    result += calculateCombinationsV2(
      position,
      patternLength - 1,
      passedPositions
    );
  }
  return result;
}

console.log(calculateCombinationsV2('A', 10));
console.log(calculateCombinationsV2('E', 4));
