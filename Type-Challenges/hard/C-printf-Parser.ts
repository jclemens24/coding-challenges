/* eslint-disable no-unused-vars */
/**
 * There is a function in C language: printf. This function allows us to print something with formatting. Like this:

```
printf("The result is %d.", 42);
```
This challenge requires you to parse the input string and extract the format placeholders like %d and %f. For example, if the input string is "The result is %d.", the parsed result is a tuple ['dec'].

Here is the mapping:
```
type ControlsMap = {
  c: 'char',
  s: 'string',
  d: 'dec',
  o: 'oct',
  h: 'hex',
  f: 'float',
  p: 'pointer',
}
```
 */

type ControlsMap = {
  c: 'char';
  s: 'string';
  d: 'dec';
  o: 'oct';
  h: 'hex';
  f: 'float';
  p: 'pointer';
};

type S = '%s';
type Format<S extends string> = S extends `${infer F}${infer R}`
  ? F extends '%'
    ? R
    : Format<R>
  : never;

type FormatStr = Format<S>;
type Get = ControlsMap[FormatStr];

type ParsePrintFormat<
  S extends string,
  Printer extends readonly string[] = []
> = S extends `${string}%${infer F}${infer R}`
  ? F extends keyof ControlsMap
    ? ParsePrintFormat<R, [...Printer, ControlsMap[F]]>
    : ParsePrintFormat<R, Printer>
  : Printer;

type print = ParsePrintFormat<'The result is %d. %h %p'>;

type ParsePrintFormatV2<S extends string> = S extends `${infer _}%${infer L}`
  ? [
      ControlsMap[(L extends `${infer F}${infer _}` ? F : L) &
        keyof ControlsMap],
      ...ParsePrintFormatV2<L>
    ]
  : [];

type print2 = ParsePrintFormatV2<'print this letter %c: '>;
