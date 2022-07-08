function ArrayToReplace(
  inputArray: number[],
  elemToReplace: number,
  substitutionElem: number
): number[] {
  const outputArray = inputArray.map((num) => {
    if (num === elemToReplace) {
      return (num = substitutionElem);
    } else {
      return num;
    }
  });
  return outputArray;
}

console.log(ArrayToReplace([1, 2, 1], 1, 3));

function ArrayToReplaceV2(
  inputArray: number[],
  element: number,
  substitutionElem: number
): number[] {
  const outputArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === element) {
      outputArray.push(substitutionElem);
    } else {
      outputArray.push(inputArray[i]);
    }
  }
  return outputArray;
}

console.log(ArrayToReplaceV2([1, 2, 1], 1, 3));
