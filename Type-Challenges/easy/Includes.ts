/* eslint-disable no-unused-vars */
/**
 * Implement the JavaScript Array.includes function in the type system. A type takes the two arguments. The output should be a boolean true or false.

For example:
```
type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
```
 */

type Includes<T extends any[], S> = S extends T[number] ? true : false;

type IsPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>;
