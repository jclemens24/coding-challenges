/**
 * You are implementing your own HTML editor. To make it more comfortable for developers you would like to add an auto-completion feature to it.

Given the starting HTML tag, find the appropriate end tag which your editor should propose.

If you are not familiar with HTML, consult with this note.
@see codesignal {keyword://html-rules-for-tags}

Version 2 and 3 are the best performers and preferable to version 1. 
 */

performance.mark('version-1-start');
const HTMLAutoClose = function (startTag: string): string {
  const element = startTag.match(/(?<=<)[^<]+(?=>)/);

  return (
    element
      ?.map((val) => `</${val.substring(0, val.indexOf(' ')) || val}>`)
      .join('') || ''
  );
};
performance.mark('version-1-end');

console.log(HTMLAutoClose("<button type='button' disabled>"));
console.log(HTMLAutoClose('<i>'));
console.log(
  HTMLAutoClose(
    "<div id='my_area' class='data' title='This is a test for title on Div tag'>"
  )
);

performance.mark('version-2-start');
const HTMLAutoCloseV2 = (startTag: string): string =>
  `</${startTag.match(/\w+/)}>`;
performance.mark('version-2-end');
console.log(HTMLAutoCloseV2("<button type='button' disabled>"));
console.log(HTMLAutoCloseV2('<i>'));
console.log(
  HTMLAutoCloseV2(
    "<div id='my_area' class='data' title='This is a test for title on Div tag'>"
  )
);
performance.mark('version-3-start');
const HTMLAutoCloseV3 = (startTag: string): string => {
  return '</' + startTag.slice(1, startTag.indexOf(' ')) + '>';
};
performance.mark('version-3-end');
console.log(HTMLAutoCloseV3("<button type='button' disabled>"));
console.log(HTMLAutoCloseV3('<i>'));
console.log(
  HTMLAutoCloseV3(
    "<div id='my_area' class='data' title='This is a test for title on Div tag'>"
  )
);
performance.measure('measure', {
  start: 'version-1-start',
  end: 'version-1-end'
});
performance.measure('measure', {
  start: 'version-2-start',
  end: 'version-2-end'
});
performance.measure('measure', {
  start: 'version-3-start',
  end: 'version-3-end'
});

console.log(performance.getEntriesByType('measure'));
