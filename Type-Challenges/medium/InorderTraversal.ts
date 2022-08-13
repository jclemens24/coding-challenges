/* eslint-disable no-unused-vars */
/**
 * Implement the type version of binary tree inorder traversal.

For example:

```
const tree1 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
} as const

type A = InorderTraversal<typeof tree1> // [1, 3, 2]
```
 */

type Node = {
  val: number;
  left: Node | null;
  right: Node | null;
};

type InorderTraversal<
  T extends Node | null,
  U extends Node = NonNullable<T>
> = T extends U
  ? [...InorderTraversal<T['left']>, T['val'], ...InorderTraversal<T['right']>]
  : [];

const tree1 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: null
  }
} as const;

type A = InorderTraversal<typeof tree1>;

export {};
