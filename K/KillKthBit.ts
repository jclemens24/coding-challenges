/**
 * Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.
In order to stop the Mad Coder evil genius you need to decipher the encrypted message he sent to his minions. The message contains several numbers that, when typed into a supercomputer, will launch a missile into the sky blocking out the sun, and making all the people on Earth grumpy and sad.

You figured out that some numbers have a modified single digit in their binary representation. More specifically, in the given number n the kth bit from the right was initially set to 0, but its current value might be different. It's now up to you to write a function that will change the kth bit of n back to 0.
 */

console.log(Number(8).toString(2));

function KillKthBit(n: number, k: number): number {
  console.log(n.toString(2));
  console.log((n &= ~(1 << (k - 1))));
  return (n &= ~(1 << (k - 1)));
}

KillKthBit(37, 3);

function KillKthBitV2(n: number, k: number): number {
  return n & ~(1 << (k - 1));
}

KillKthBitV2(37, 3);

// Using methods rather than bitwise

function KillKthBitV3(n: number, k: number): number {
  return parseInt(
    n
      .toString(2)
      .split('')
      .map((val, i, arr) => (i === arr.length - k ? '0' : val))
      .join(''),
    2
  );
}

KillKthBitV3(37, 3);
