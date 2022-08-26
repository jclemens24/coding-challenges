/**
 * #Sort the columns of a csv-file

You get a string with the content of a csv-file. The columns are separated by semicolons.
The first line contains the names of the columns.
Write a method that sorts the columns by the names of the columns alphabetically and incasesensitive.

An example:

```
Before sorting:
As table (only visualization):
|myjinxin2015|raulbc777|smile67|Dentzil|SteffenVogel_79|
|17945       |10091    |10088  |3907   |10132          |
|2           |12       |13     |48     |11             |

The csv-file:
myjinxin2015;raulbc777;smile67;Dentzil;SteffenVogel_79\n
17945;10091;10088;3907;10132\n
2;12;13;48;11

----------------------------------

After sorting:
As table (only visualization):
|Dentzil|myjinxin2015|raulbc777|smile67|SteffenVogel_79|
|3907   |17945       |10091    |10088  |10132          |
|48     |2           |12       |13     |11             |

The csv-file:
Dentzil;myjinxin2015;raulbc777;smile67;SteffenVogel_79\n
3907;17945;10091;10088;10132\n
48;2;12;13;11
```

There is no need for prechecks. You will always get a correct string with more than 1 line und more than 1 row. All columns will have different names.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
 */

export function sortCsvColumns(csvFileContent: string): string {
  const parsedCSV = csvFileContent.split(/\n/g).map((val) => val.split(';'));
  const columns: string[][] = [];

  for (let i = 0; i < parsedCSV[0].length; i++) {
    const temp: string[] = [];
    for (let j = 0; j < parsedCSV.length; j++) {
      // notice [j] before [i], this keeps data with proper column header
      temp.push(parsedCSV[j][i]);
    }
    // Once j loop completes one cycle, push it into columns and continue loop
    columns.push(temp);
  }
  columns.sort((a, b) => a[0].localeCompare(b[0]));

  const finalSortedColumns: string[][] = [];
  for (let i = 0; i < columns[0].length; i++) {
    const row: string[] = [];
    for (let j = 0; j < columns.length; j++) {
      row.push(columns[j][i]);
    }
    finalSortedColumns.push(row);
  }
  return finalSortedColumns.map((r) => r.join(';')).join('\n');
}

console.log(
  sortCsvColumns(
    'myjinxin2015;raulbc777;smile67;Dentzil;SteffenVogel_79\n' +
      '17945;10091;10088;3907;10132\n' +
      '2;12;13;48;11'
  )
);
