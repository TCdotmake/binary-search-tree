import sortAndClean from "./sortAndClean.js";
import randomNum from "./randomNum.js";
import { mkTree } from "./binarySearchTree.js";
export function app() {
  let arr = [];
  for (let i = 0; i < 21; i++) {
    arr.push(randomNum(99));
  }
  arr.push(69);
  let tree = mkTree(arr);
  tree.buildTree();
  const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
  prettyPrint(tree.root);
  tree.inorder((current) => console.log(current));
}
