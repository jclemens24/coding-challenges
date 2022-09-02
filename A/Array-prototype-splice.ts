/* eslint-disable no-extend-native */
/**
 * implement Array.prototype.slice
 */

Array.prototype.splice = function (
  from: number,
  count: number,
  ...items: any[]
) {
  const deleteCount = Math.min(this.length - from, count);
  const target = this.length - deleteCount + items.length;
  const rest: any[] = [].concat(...items, ...this.slice(deleteCount + from));
  const itemsDeleted: any[] = this.slice(from, deleteCount + from);

  for (let i = 0; i < rest.length; ++i) {
    this[from + i] = rest[i];
  }
  this.length = target;
  return itemsDeleted;
};

const names = ['Jordan', 'Bob', 'Mike', 'Jenny'];
console.log(names.splice(0, 2, 'Greg'));
console.log(names);

export {};
