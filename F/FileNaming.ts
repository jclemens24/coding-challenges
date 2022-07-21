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

const FileNamingV2 = (names: string[]): string[] => {
  const fileSet = new Set<string>();

  return names.map((name) => {
    let filename = name;
    let i = 1;
    while (fileSet.has(filename)) {
      filename = `${name}(${i++})`;
    }
    fileSet.add(filename);
    return filename;
  });
};

console.log(FileNamingV2(['doc', 'doc', 'image', 'doc(1)', 'doc']));

const FileNamingV3 = (names: string[]): string[] => {
  const dict: { [key: string]: number } = Object.create(null);
  const finalFilenames: string[] = [];

  for (let i = 0; i < names.length; i++) {
    const basename = names[i];
    if (!Object.prototype.hasOwnProperty.call(dict, basename)) {
      dict[basename] = 0;
      finalFilenames.push(basename);
    } else {
      let result;
      do {
        dict[basename]++;
        result = basename + '(' + dict[basename] + ')';
      } while (Object.prototype.hasOwnProperty.call(dict, result));
      finalFilenames.push(result);
      dict[result] = 0;
    }
  }
  return finalFilenames;
};

console.log(FileNamingV3(['doc', 'doc', 'image', 'doc(1)', 'doc']));

const FileNamingV4 = (names: string[]): string[] => {
  const filemap = new Map<string, number>();

  for (let i = 0; i < names.length; i++) {
    let filename = names[i];
    if (filemap.has(filename)) {
      // eslint-disable-next-line prefer-const
      let count = filemap.get(filename);
      while (filemap.has(filename + '(' + count + ')')) {
        count!++;
      }
      filemap.set(filename, count! + 1);
      filename += '(' + count! + ')';
      names[i] = filename;
      filemap.set(filename, 1);
    } else {
      filemap.set(filename, 1);
    }
  }
  return names;
};

console.log(FileNamingV4(['doc', 'doc', 'image', 'doc(1)', 'doc']));
