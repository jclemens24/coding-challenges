/**
 * For a given chemical formula represented by a string, count the number of atoms of each element contained in the molecule and return an object (associative array in PHP, Dictionary<string, int> in C#, Map<String,Integer> in Java).

For example:

var water = 'H2O';
parseMolecule(water); // return {H: 2, O: 1}

var magnesiumHydroxide = 'Mg(OH)2';
parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}

var fremySalt = 'K4[ON(SO3)2]2';
parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}
As you can see, some formulas have brackets in them. The index outside the brackets tells you that you have to multiply count of each atom inside the bracket on this index. For example, in Fe(NO3)2 you have one iron atom, two nitrogen atoms and six oxygen atoms.

Note that brackets may be round, square or curly and can also be nested. Index after the braces is optional.
 */

interface Collection {
  atoms: { [key: string]: number };
  groups: Collection[];
  multiplier: number;
  parent: { [key: string]: any };
}

export function parseMolecule(formula: string): Record<string, number> {
  const BRACKET_OPEN = /\[|\{|\(/;
  const BRACKET_CLOSED = /\]|}|\)/;
  const IS_ATOM = /^[A-Z][a-z]?$/;
  const HAS_MULTIPLIER = /^\d+/;

  const groupCollection = (parent = {}): Collection => {
    return { atoms: {}, groups: [], multiplier: 1, parent };
  };

  const parseGroups = (str: string) => {
    const collection = groupCollection();
    let curr: { [key: string]: any } = collection;
    console.log('curr: %o', curr);

    for (let i = 0, len = str.length; i < len; i++) {
      const char = str[i];
      let closedBracket = false;
      let atom: any;
      let multiplier = 1;

      if (BRACKET_OPEN.test(char)) {
        const parent = curr;
        curr = groupCollection(parent);
        parent.groups.push(curr);
        continue;
      } else if (BRACKET_CLOSED.test(char)) {
        closedBracket = true;
      } else if (IS_ATOM.test(char)) {
        const currChar = str[i];
        const nextChar = currChar + str[i + 1];
        atom = currChar;

        if (IS_ATOM.test(nextChar)) {
          atom = nextChar;
          i += 1;
        }
      }

      const getMultiple = str.slice(i + 1).match(HAS_MULTIPLIER);

      if (getMultiple) {
        multiplier = +getMultiple[0];
        i += getMultiple[0].length;
      }

      if (closedBracket) {
        curr.multiplier = multiplier;
        curr = curr.parent;
      } else {
        const atomCount = (atom && curr.atoms[atom]) || 0;
        curr.atoms[atom] = atomCount + multiplier;
      }
    }
    return collection;
  };

  const sumGroup = (
    group: Collection,
    accumMult: number = 1,
    acc: { [key: string]: any } = {}
  ) => {
    const { groups, multiplier, atoms } = group;

    accumMult *= multiplier || 1;

    for (let i = 0, len = groups?.length ?? 0; i < len; i++) {
      sumGroup(groups![i], accumMult, acc);
    }

    Object.entries(atoms).forEach(([key, value]) => {
      const prev = acc[key] || 0;
      const count = value;

      acc[key] = prev + count * accumMult;
    });
    return acc;
  };

  const collection = parseGroups(formula);
  return sumGroup(collection);
}

console.log(parseMolecule('H2O'));
console.log(parseMolecule('K4[ON(SO3)2]2'));

/* Version 2 */

type IToken =
  | { type: 'Element'; name: string }
  | { type: 'Number'; number: number }
  | { type: 'Group'; start: true; end?: false; kind: '(' | '[' | '{' }
  | { type: 'Group'; start?: false; end: true; kind: ')' | ']' | '}' };

type IASTElementNode = { type: 'Element'; name: string; count: number };
type IASTGroupNode = {
  type: 'Group';
  count: number;
  // eslint-disable-next-line no-use-before-define
  children: IASTNode[];
  kind: '(' | '[' | '{';
};

type IASTNode = IASTElementNode | IASTGroupNode;

export function parseMoleculeV2(formula: string) {
  const tokens = extractTokens(formula);
  const ast = compileAST(tokens);
  const res = getElementsCount(ast);
  return res;
}

function getElementsCount(ast: IASTGroupNode) {
  const res: Record<string, number> = {};
  walk((node, multiplier, level) => {
    if (node.type === 'Element') {
      res[node.name] = (res[node.name] || 0) + node.count * multiplier;
    }
  }, ast);
  return res;
}

function extractTokens(formula: string): Iterable<IToken> {
  const inRange = (min: number, max: number) => (x: string) => {
    const code = x.charCodeAt(0);
    return code >= min && code <= max;
  };

  const isStartBracket = (x: string): x is '(' | '[' | '{' =>
    x === '(' || x === '[' || x === '{';
  const isEndBracket = (x: string): x is ')' | ']' | '}' =>
    x === ')' || x === ']' || x === '}';

  const isNumber = inRange(48, 57);
  const isUpperCase = inRange(65, 90);
  const isLowerCase = inRange(97, 122);

  return {
    [Symbol.iterator]() {
      let index = 0;
      const peek = () => formula[index];
      const read = () => formula[index++];

      const nextToken = (): null | IToken => {
        const char = read();
        if (!char) {
          return null;
        }
        if (isUpperCase(char)) {
          let element = char;
          if (peek() && isLowerCase(peek())) {
            element += read();
          }
          return { type: 'Element', name: element };
        } else if (isNumber(char)) {
          let num = char;
          while (peek() && isNumber(peek())) {
            num = num + read();
          }
          return { type: 'Number', number: +num };
        } else if (isStartBracket(char)) {
          return { type: 'Group', start: true, kind: char };
        } else if (isEndBracket(char)) {
          return { type: 'Group', end: true, kind: char };
        }
        throw new Error('Unexpected Token');
      };
      return {
        next() {
          const token = nextToken();
          if (token) {
            return { value: token, done: false };
          }
          return { value: undefined, done: true };
        }
      };
    }
  };
}

function compileAST(tokens: Iterable<IToken>) {
  const root: IASTNode = { type: 'Group', count: 1, children: [], kind: '(' };
  const scope: IASTNode[] = [root];
  let current: IASTNode = root;
  let last: IASTNode = root;

  const pushScope = (x: IASTNode) => {
    scope.push(x);
    current = x;
  };

  const popScope = () => {
    last = scope.pop()!;
    current = scope[scope.length - 1];
  };

  for (const token of tokens) {
    switch (token.type) {
      case 'Number': {
        last.count = token.number;
        break;
      }

      case 'Element': {
        const element: IASTElementNode = {
          type: 'Element',
          name: token.name,
          count: 1
        };
        current.children.push(element);
        last = element;
        break;
      }

      case 'Group': {
        if (token.start) {
          const group: IASTGroupNode = {
            type: 'Group',
            count: 1,
            children: [],
            kind: token.kind
          };
          current.children.push(group);
          pushScope(group);
        } else {
          popScope();
        }
        break;
      }
    }
  }

  return root;
}

type IASTWalkerNode =
  | IASTNode
  | { type: 'GroupStart'; group: IASTGroupNode }
  | { type: 'GroupEnd'; group: IASTGroupNode };
type IASTWalker = (
  el: IASTWalkerNode,
  multiplier: number,
  level: number
) => void;

function walk(fn: IASTWalker, ast: IASTGroupNode, multiplier = 1, level = 1) {
  for (const el of ast.children) {
    if (el.type === 'Element') {
      fn(el, multiplier, level);
    } else {
      fn({ type: 'GroupStart', group: el }, multiplier, level);
      walk(fn, el, multiplier * el.count, level + 1);
      fn({ type: 'GroupEnd', group: el }, multiplier, level);
    }
  }
}

console.log(parseMoleculeV2('H2O'));
console.log(parseMoleculeV2('K4[ON(SO3)2]2'));
