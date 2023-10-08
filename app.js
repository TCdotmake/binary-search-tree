import sortAndClean from "./sortAndClean.js";
import randomNum from "./randomNum.js";
import { mkTree } from "./binarySearchTree.js";
import prettyPrint from "./prettyPrint.js";
export function app() {
  let arr = [];
  for (let i = 0; i < 11; i++) {
    arr.push(randomNum(99));
  }
  let tree = mkTree(arr);
  tree.buildTree();
  prettyPrint(tree.root);
  console.log(`Balanced?: ${tree.isBalanced()}`);
  console.log("LevelOrder:");
  console.log(tree.levelorder());
  console.log("InOrder:");
  console.log(tree.inorder());
  console.log("PreOrder:");
  console.log(tree.preorder());
  console.log("PostOrder:");
  console.log(tree.postorder());
  console.log("Inserting elements over 99");
  for (let i = 0; i < 11; i++) {
    tree.insert(randomNum(99) + 99);
  }
  prettyPrint(tree.root);
  console.log(`Balanced?: ${tree.isBalanced()}`);
  console.log(`Rebalanced tree:`);
  tree.rebalance();
  prettyPrint(tree.root);
  console.log(`Balanced?: ${tree.isBalanced()}`);
  console.log("LevelOrder:");
  console.log(tree.levelorder());
  console.log("InOrder:");
  console.log(tree.inorder());
  console.log("PreOrder:");
  console.log(tree.preorder());
  console.log("PostOrder:");
  console.log(tree.postorder());
}
