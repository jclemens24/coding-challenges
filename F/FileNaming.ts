/**
 * You are given an array of desired filenames in the order of their creation. Since two files cannot have equal names, the one which comes later will have an addition to its name in a form of (k), where k is the smallest positive integer such that the obtained name is not used yet.

Return an array of names that will be given to the files.
 * 
   @param {string[]} names Array of filenames
 * @returns {string[]} Array of strings {filenames}

   @summary Remember, while loop is nested so it is only executed when filemap[filename] exists in the filemap object
 */

const FileNaming = function (names: string[]): string[] {
  const fileMap: { [key: string]: number } = {};

  return names.map((name) => {
    let filename = name;

    while (fileMap[filename]) {
      filename = `${name}(${fileMap[name]++})`;
    }
    fileMap[filename] = 1;
    console.log(fileMap);
    return filename;
  });
};

console.log(FileNaming(['doc', 'doc', 'image', 'doc(1)', 'doc']));
