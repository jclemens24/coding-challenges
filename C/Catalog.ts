/**
 * You are given a small extract of a catalog:

```
s = "<prod><name>drill</name><prx>99</prx><qty>5</qty></prod>

<prod><name>hammer</name><prx>10</prx><qty>50</qty></prod>

<prod><name>screwdriver</name><prx>5</prx><qty>51</qty></prod>

<prod><name>table saw</name><prx>1099.99</prx><qty>5</qty></prod>

<prod><name>saw</name><prx>9</prx><qty>10</qty></prod>
```
...
(`prx` stands for `price`, `qty` for `quantity`) and an article i.e "saw".

The `function catalog(s, "saw")` returns the line(s) corresponding to the article with `$` before the prices:

```
"table saw > prx: $1099.99 qty: 5\nsaw > prx: $9 qty: 10\n..."
```
If the article is not in the catalog return "Nothing".

Notes

  1. There is a blank line between two lines of the catalog.
  2. The same article may appear more than once. If that happens return all the lines concerned by the article (in the same order as in the catalog).
  3. The line separator of results may depend on the language \n or \r\n. In Pascal \n is replaced by LineEnding.
  4. in Perl use "£" instead of "$" before the prices.
  5. You can see examples in the "Sample tests".
 */

export function catalog(s: string, article: string): string {
  const catalogArr = s.split(/\n+/);
  const products = catalogArr.filter((product) => product.includes(article));

  const matchesArr = products.map((product) => {
    const name = product.match(/<name>(.+)<\/name>/);
    const price = product.match(/<prx>(.+)<\/prx>/);
    const quantity = product.match(/<qty>(.+)<\/qty>/);
    return `${name![1]} > prx: $${price![1]} qty: ${quantity![1]}`;
  });

  return matchesArr.join('\r\n') || 'Nothing';
}

console.log(
  catalog(
    `<prod><name>drill</name><prx>99</prx><qty>5</qty></prod>

<prod><name>hammer</name><prx>10</prx><qty>50</qty></prod>

<prod><name>screwdriver</name><prx>5</prx><qty>51</qty></prod>

<prod><name>table saw</name><prx>1099.99</prx><qty>5</qty></prod>

<prod><name>saw</name><prx>9</prx><qty>10</qty></prod>

<prod><name>chair</name><prx>100</prx><qty>20</qty></prod>

<prod><name>fan</name><prx>50</prx><qty>8</qty></prod>

<prod><name>wire</name><prx>10.8</prx><qty>15</qty></prod>

<prod><name>battery</name><prx>150</prx><qty>12</qty></prod>

<prod><name>pallet</name><prx>10</prx><qty>50</qty></prod>

<prod><name>wheel</name><prx>8.80</prx><qty>32</qty></prod>

<prod><name>extractor</name><prx>105</prx><qty>17</qty></prod>

<prod><name>bumper</name><prx>150</prx><qty>3</qty></prod>

<prod><name>ladder</name><prx>112</prx><qty>12</qty></prod>

<prod><name>hoist</name><prx>13.80</prx><qty>32</qty></prod>

<prod><name>platform</name><prx>65</prx><qty>21</qty></prod>

<prod><name>car wheel</name><prx>505</prx><qty>7</qty></prod>

<prod><name>bicycle wheel</name><prx>150</prx><qty>11</qty></prod>

<prod><name>big hammer</name><prx>18</prx><qty>12</qty></prod>

<prod><name>saw for metal</name><prx>13.80</prx><qty>32</qty></prod>

<prod><name>wood pallet</name><prx>65</prx><qty>21</qty></prod>

<prod><name>circular fan</name><prx>80</prx><qty>8</qty></prod>

<prod><name>exhaust fan</name><prx>62</prx><qty>8</qty></prod>

<prod><name>window fan</name><prx>62</prx><qty>8</qty></prod>`,
    'saw'
  )
);

export function catalogV2(s: string, article: string): string {
  const foundProduct = s
    .split(/\n+/)
    .filter((text) => text.includes(article))
    .map((line) => new Product(line))
    .map((prod) => `${prod.name} > prx: $${prod.prx} qty: ${prod.qty}`)
    .join('\r\n');

  return foundProduct || 'Nothing';
}

class Product {
  public name: string;
  public prx: string;
  public qty: string;

  constructor(str: string) {
    this.name = this.parseName(str);
    this.qty = this.parseQuantity(str);
    this.prx = this.parsePrice(str);
  }

  private parseName(str: string): string {
    const start = str.indexOf('<name>') + 6;
    const end = str.indexOf('</name');
    return str.substring(start, end);
  }

  private parseQuantity(str: string): string {
    const start = str.indexOf('<qty>') + 5;
    const end = str.indexOf('</qty>');
    return str.substring(start, end);
  }

  private parsePrice(str: string): string {
    const start = str.indexOf('<prx>') + 5;
    const end = str.indexOf('</prx>');
    return str.substring(start, end);
  }
}

console.log(
  catalogV2(
    `<prod><name>drill</name><prx>99</prx><qty>5</qty></prod>

<prod><name>hammer</name><prx>10</prx><qty>50</qty></prod>

<prod><name>screwdriver</name><prx>5</prx><qty>51</qty></prod>

<prod><name>table saw</name><prx>1099.99</prx><qty>5</qty></prod>

<prod><name>saw</name><prx>9</prx><qty>10</qty></prod>

<prod><name>chair</name><prx>100</prx><qty>20</qty></prod>

<prod><name>fan</name><prx>50</prx><qty>8</qty></prod>

<prod><name>wire</name><prx>10.8</prx><qty>15</qty></prod>

<prod><name>battery</name><prx>150</prx><qty>12</qty></prod>

<prod><name>pallet</name><prx>10</prx><qty>50</qty></prod>

<prod><name>wheel</name><prx>8.80</prx><qty>32</qty></prod>

<prod><name>extractor</name><prx>105</prx><qty>17</qty></prod>

<prod><name>bumper</name><prx>150</prx><qty>3</qty></prod>

<prod><name>ladder</name><prx>112</prx><qty>12</qty></prod>

<prod><name>hoist</name><prx>13.80</prx><qty>32</qty></prod>

<prod><name>platform</name><prx>65</prx><qty>21</qty></prod>

<prod><name>car wheel</name><prx>505</prx><qty>7</qty></prod>

<prod><name>bicycle wheel</name><prx>150</prx><qty>11</qty></prod>

<prod><name>big hammer</name><prx>18</prx><qty>12</qty></prod>

<prod><name>saw for metal</name><prx>13.80</prx><qty>32</qty></prod>

<prod><name>wood pallet</name><prx>65</prx><qty>21</qty></prod>

<prod><name>circular fan</name><prx>80</prx><qty>8</qty></prod>

<prod><name>exhaust fan</name><prx>62</prx><qty>8</qty></prod>

<prod><name>window fan</name><prx>62</prx><qty>8</qty></prod>`,
    'saw'
  )
);

type Tags = readonly ['name', 'prx', 'qty'];

export function catalogV3(s: string, article: string): string {
  const tags: Tags = ['name', 'prx', 'qty'] as const;
  const products = s.split(/\n+/).filter((prod) => prod.includes(article));
  if (!products || products.length === 0) return 'Nothing';
  return products
    .map((prod) => tags.map((field) => parseTags(prod, field)).join(' '))
    .join('\r\n');
}

const parseTags = (prod: string, field: Tags[number]): string => {
  const result = prod.match(new RegExp(`${field}>(.+)</${field}`))?.[1] || '';
  switch (field) {
    case 'name':
      return `${result} >`;
    case 'prx':
      return `${field}: $${result}`;
    case 'qty':
      return `${field}: ${result}`;
    default:
      throw new Error(`${field} is not yet implemented.`);
  }
};

console.log(
  catalogV3(
    `<prod><name>drill</name><prx>99</prx><qty>5</qty></prod>

<prod><name>hammer</name><prx>10</prx><qty>50</qty></prod>

<prod><name>screwdriver</name><prx>5</prx><qty>51</qty></prod>

<prod><name>table saw</name><prx>1099.99</prx><qty>5</qty></prod>

<prod><name>saw</name><prx>9</prx><qty>10</qty></prod>

<prod><name>chair</name><prx>100</prx><qty>20</qty></prod>

<prod><name>fan</name><prx>50</prx><qty>8</qty></prod>

<prod><name>wire</name><prx>10.8</prx><qty>15</qty></prod>

<prod><name>battery</name><prx>150</prx><qty>12</qty></prod>

<prod><name>pallet</name><prx>10</prx><qty>50</qty></prod>

<prod><name>wheel</name><prx>8.80</prx><qty>32</qty></prod>

<prod><name>extractor</name><prx>105</prx><qty>17</qty></prod>

<prod><name>bumper</name><prx>150</prx><qty>3</qty></prod>

<prod><name>ladder</name><prx>112</prx><qty>12</qty></prod>

<prod><name>hoist</name><prx>13.80</prx><qty>32</qty></prod>

<prod><name>platform</name><prx>65</prx><qty>21</qty></prod>

<prod><name>car wheel</name><prx>505</prx><qty>7</qty></prod>

<prod><name>bicycle wheel</name><prx>150</prx><qty>11</qty></prod>

<prod><name>big hammer</name><prx>18</prx><qty>12</qty></prod>

<prod><name>saw for metal</name><prx>13.80</prx><qty>32</qty></prod>

<prod><name>wood pallet</name><prx>65</prx><qty>21</qty></prod>

<prod><name>circular fan</name><prx>80</prx><qty>8</qty></prod>

<prod><name>exhaust fan</name><prx>62</prx><qty>8</qty></prod>

<prod><name>window fan</name><prx>62</prx><qty>8</qty></prod>`,
    'saw'
  )
);
