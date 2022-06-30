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
