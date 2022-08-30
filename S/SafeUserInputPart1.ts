export function htmlspecialchars(formData: string): string {
  return formData.replace(/[<>"&]/g, (match) => {
    switch (match) {
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      case '&':
        return '&amp;';
      default:
        return '';
    }
  });
}

console.log(htmlspecialchars('<h2>Hello World</h2>'));

export const arr = (n: number = 0): number[] => {
  return [...new Array(n).keys()] || [];
};

console.log(arr(5));
console.log(arr());

export const arrV2 = (n: number = 0): number[] => {
  return Array.from({ length: n }, (_, i) => i);
};

console.log(arrV2(5));
console.log(arrV2());
