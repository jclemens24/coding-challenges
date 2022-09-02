/**
 * Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [8, 64]
 */

export function parse(data: string): number[] {
  const result: number[] = [];
  let counter: number = 0;
  [...data].forEach((char) => {
    if (char === 'i') {
      counter += 1;
    }
    if (char === 's') {
      counter *= counter;
    }
    if (char === 'o') {
      result.push(counter);
    }
    if (char === 'd') {
      counter -= 1;
    }
  });
  return result;
}

console.log(parse('iiisdoso'));
console.log(parse('iiisxxxdoso'));
