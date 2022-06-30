const longestWord = function (text: string): string {
  // const textArr = text
  // 	.split(', ')
  // 	.map(x => x.replaceAll(/([^\s(A-Za-z)])/g, ''));

  const textArr2 = text.match(/\b([A-Z]+)\b/gi);
  console.log(textArr2);
  if (textArr2) {
    const max = Math.max(...textArr2.map((x) => x.length));
    const filtered = textArr2.filter((x) => x.length === max);
    return filtered.join('');
  }
  return '';
};

console.log(longestWord('Ready, steady, go!'));
console.log(longestWord('Ready[[[, steady, go!'));
console.log(longestWord('ABCd'));
console.log(longestWord('To be or not to be'));

const longestWordV2 = function (text: string): string {
  return (
    text
      .match(/\b([A-Z]+)\b/gi)
      ?.reduce(
        (acc, curr) => (acc = acc.length >= curr.length ? acc : curr),
        ''
      ) || ''
  );
};

console.log(longestWordV2('Ready, steady, go!'));
console.log(longestWordV2('Ready[[[, steady, go!'));
console.log(longestWordV2('ABCd'));
console.log(longestWordV2('To be or not to be'));

// Flatten an array of arrays with reduce
// Would be eaiser to just use .flat or .flatMap

const flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
].reduce(function (acc, curr) {
  return acc.concat(curr), [];
});

// Count instances using reduce

const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

type CountedNames = {
  [name: string]: number;
};

const countedNames = names.reduce((allNames: CountedNames, name) => {
  if (name in allNames) allNames[name]++;
  else allNames[name] = 1;
  return allNames;
}, {});

console.log(countedNames);
