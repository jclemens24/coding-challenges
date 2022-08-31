/**
 * Chingel is practicing for a rowing competition to be held on this saturday. He is trying his best to win this tournament for which he needs to figure out how much time it takes to cover a certain distance.

Input

You will be provided with the total distance of the journey, speed of the boat and whether he is going downstream or upstream. The speed of the stream and direction of rowing will be given as a string. Check example test cases!

Output

The output returned should be the time taken to cover the distance. If the result has decimal places, round them to 2 fixed positions.
 */

export function time(
  distance: number,
  boatSpeed: number,
  stream: string
): number {
  const [direction, streamSpeed] = stream.split(' ');

  if (/down/gi.test(direction)) {
    boatSpeed += parseInt(streamSpeed);
  }

  if (/up/gi.test(direction)) {
    boatSpeed -= parseInt(streamSpeed);
  }

  // return +(distance / boatSpeed).toFixed(2);
  // Another way to round ints to 2 decimals
  return Math.round((distance / boatSpeed) * 100) / 100;
}

console.log(time(24, 10, 'Downstream 2'));
console.log(time(54, 28, 'Downstream 3'));
