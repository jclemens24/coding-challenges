/* eslint-disable no-labels */
export function movie(card: number, ticket: number, perc: number): number {
  let tripToCinema: number = 0;

  let systemA: number = 0;
  let systemB: number = card;

  while (Math.ceil(systemB) >= systemA) {
    systemA += ticket;
    systemB += ticket * Math.pow(perc, ++tripToCinema);
  }
  return tripToCinema;
}

console.log(movie(500, 15, 0.9));
console.log(movie(100, 10, 0.95));
console.log(movie(0, 10, 0.95));

export function movieV2(card: number, ticket: number, perc: number): number {
  let tripToCinema: number = 0;
  let systemA: number = 0;
  let systemB: number = card;

  do {
    tripToCinema += 1;
    systemA += ticket;
    systemB += ticket * Math.pow(perc, tripToCinema);
  } while (Math.ceil(systemB) >= systemA);
  return tripToCinema;
}

console.log(movieV2(500, 15, 0.9));
console.log(movieV2(100, 10, 0.95));
console.log(movieV2(0, 10, 0.95));

// const iterator = document.createNodeIterator(
//   document.body,
//   NodeFilter.SHOW_COMMENT
// );
// let currentNode: Node | null;
// while ((currentNode = iterator.nextNode()) !== null) {
//   console.log(currentNode.textContent?.trim());
// }

let str = '';

notone: for (let i = 0; i < 5; i++) {
  if (i === 1) continue notone;
  str += i;
}
console.log(str);
