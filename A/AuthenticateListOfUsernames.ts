/**
 * Given an array of strings representing a list of usernames, return true only if all usernames comply with your company's guidelines. Return false otherwise.

The guidelines say that the username is valid only if:

  1. it is between 6-10 characters long;
  2. contains at least 1 lowercase letter;
  3. contains at least 1 number;
  4. contains only numbers and lowercase letters.

Examples of arrays that will be tested:

`const usernames1 = ['john123', 'alex222', 'sandra1']; // returns true`

`const usernames2 = ['john123', 'alex222', 'sandraW']; // returns false because sandraW has no number`

`const usernames3 = ['john_123', 'alex222', 'sandra1']; // returns false because john_123 contains an invalid character`

Notes:

You will always be given an array with at least 1 string to check.
 */

export function authList(arr: string[]): boolean {
  return arr.every((username) =>
    /^(?=.*\d+)(?=.*[a-z])[a-z\d]{6,10}$/.test(username)
  );
}

console.log(authList(['john123', 'alex222', 'sandra1']));
console.log(authList(['john123', 'alex222', 'sandraW']));
console.log(authList(['']));
console.log(authList(['123456']));
console.log(authList(['abcdef']));
console.log(authList(['john_123', 'alex222', 'sandra1']));

// I prefer to break these RegExp up

export function authListV2(arr: string[]): boolean {
  return arr.every(
    (username) =>
      /[0-9]/.test(username) &&
      /[a-z]/.test(username) &&
      /^[a-z0-9]{6,10}/.test(username)
  );
}

console.log(authListV2(['john123', 'alex222', 'sandra1']));
console.log(authListV2(['john123', 'alex222', 'sandraW']));
console.log(authListV2(['']));
console.log(authListV2(['123456']));
console.log(authListV2(['abcdef']));
console.log(authListV2(['john_123', 'alex222', 'sandra1']));

// I saw this version and really liked it so here it is...

type TestUsername = (u: string) => boolean;

const usernameRules: Array<TestUsername> = [
  (u) => {
    const { length } = u;
    return length >= 6 && length <= 10;
  },
  (u) => /[a-z]/.test(u),
  (u) => /[0-9]/.test(u),
  (u) => /^[a-z0-9]+$/.test(u)
];
export function authListV3(arr: string[]): boolean {
  return arr.every((username) => usernameRules.every((func) => func(username)));
}

console.log(authListV3(['john123', 'alex222', 'sandra1']));
console.log(authListV3(['john123', 'alex222', 'sandraW']));
console.log(authListV3(['']));
console.log(authListV3(['123456']));
console.log(authListV3(['abcdef']));
console.log(authListV3(['john_123', 'alex222', 'sandra1']));
