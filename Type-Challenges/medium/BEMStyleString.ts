/* eslint-disable no-unused-vars */
/**
 * The Block, Element, Modifier methodology (BEM) is a popular naming convention for classes in CSS.

For example, the block component would be represented as `btn`, element that depends upon the block would be represented as `btn__price`, modifier that changes the style of the block would be represented as `btn--big` or `btn__price--warning`.

Implement BEM<B, E, M> which generate string union from these three parameters. Where B is a string literal, E and M are string arrays (can be empty).
 */

type BEM<
  Block extends string,
  Element extends string[],
  Modifier extends string[]
> = Element[number] extends never
  ? Modifier[number] extends never
    ? Block
    : `${Block}--${Modifier[number]}`
  : Modifier[number] extends never
  ? `${Block}__${Element[number]}`
  : `${Block}__${Element[number]}--${Modifier[number]}`;

type CustomCSSElement = BEM<'btn', ['price'], []>;
type CustomCSSElement3 = BEM<'btn', [], ['pending', 'success']>;
type CustomCSSElement2 = BEM<'btn', ['price'], ['warning', 'success']>;
