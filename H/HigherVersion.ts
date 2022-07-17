/**
 * Given two version strings composed of several non-negative decimal fields separated by periods ("."), both strings contain equal number of numeric fields. Return true if the first version is higher than the second version and false otherwise.
 *
 * The syntax follows the regular semver ordering rules:
 * 
 * `1.0.5 < 1.1.0 < 1.1.5 < 1.1.10 < 1.2.0 < 1.2.2
    < 1.2.10 < 1.10.2 < 2.0.0 < 10.0.0`

    There are no leading zeros in any of the numeric fields, i.e. you do not have to handle inputs like `100.020.003` (it would instead be given as `100.20.3`).
 */

const HigherVersion = (ver1: string, ver2: string): boolean => {
  const one = ver1.split('.').map((str) => parseInt(str, 10));
  const two = ver2.split('.').map((str) => parseInt(str, 10));
  let v = 0;
  while (v < one.length && one[v] === two[v]) v++;
  return one[v] > two[v];
};

console.log(HigherVersion('1.2.2', '1.2.0'));
console.log(HigherVersion('1.0.5', '1.1.0'));

const HigherVersionV2 = (ver1: string, ver2: string): boolean => {
  const version1 = ver1.split('.').map(Number);
  const version2 = ver2.split('.').map(Number);
  for (const v in version1) {
    if (version2[v] < version1[v]) {
      return true;
    }
    if (version2[v] > version1[v]) {
      return false;
    }
  }
  return false;
};

console.log(HigherVersionV2('1.2.2', '1.2.0'));
console.log(HigherVersionV2('1.0.5', '1.1.0'));

const HigherVersionV3 = (ver1: string, ver2: string): boolean => {
  const version1 = ver1.split('.');
  const version2 = ver2.split('.');
  let difference = 0;
  version1.some((v1, i) => (difference = Number(v1) - Number(version2[i])));
  return difference > 0;
};

console.log(HigherVersionV3('1.2.2', '1.2.0'));
console.log(HigherVersionV3('1.0.5', '1.1.0'));

const HigherVersionV4 = (ver1: string, ver2: string): boolean => {
  return (
    ver1
      .split('.')
      .reduce((prev, curr, i) => prev || +curr - +ver2.split('.')[i], 0) > 0
  );
};

console.log(HigherVersionV4('1.2.2', '1.2.0'));
console.log(HigherVersionV4('1.0.5', '1.1.0'));
