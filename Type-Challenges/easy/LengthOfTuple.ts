/* eslint-disable no-unused-vars */
/**
 * For given a tuple, you need create a generic Length, pick the length of the tuple

For example:
```
type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type teslaLength = Length<tesla>  // expected 4
type spaceXLength = Length<spaceX> // expected 5
```
 */

type tesla = ['tesla', 'model 3', 'model X', 'model Y'];
type spaceX = [
  'FALCON 9',
  'FALCON HEAVY',
  'DRAGON',
  'STARSHIP',
  'HUMAN SPACEFLIGHT'
];

type Length<T extends readonly unknown[]> = T['length'];
type TeslaLength = Length<tesla>;
type SpaceXLength = Length<spaceX>;

export {};
