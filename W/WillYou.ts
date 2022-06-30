/**
 * Once Mary heard a famous song, and a line from it stuck in her head. That line was "Will you still love me when I'm no longer young and beautiful?". Mary believes that a person is loved if and only if he/she is both young and beautiful, but this is quite a depressing thought, so she wants to put her belief to the test.

Knowing whether a person is young, beautiful and loved, find out if they contradict Mary's belief.

A person contradicts Mary's belief if one of the following statements is true:

they are young and beautiful but not loved;
they are loved but not young or not beautiful.
 */

function isLoved(young: boolean, beautiful: boolean, loved: boolean) {
  if (young && beautiful && !loved) return true;
  if ((!young || !beautiful) && loved) return true;
  else return false;
}

function isLovedV2(
  young: boolean,
  beautiful: boolean,
  loved: boolean
): boolean {
  return (young && beautiful) !== loved;
}

console.log(isLoved(true, false, true));
console.log(isLovedV2(true, true, true));
