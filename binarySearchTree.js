import sortAndClean from "./sortAndClean.js";

function mkNode(data) {
  return {
    data,
    left: null,
    right: null,
  };
}

function mkTree(arr) {
  return {
    arr,
    root: null,
    buildTree() {
      //trim duplicate and sort
      let arr = sortAndClean(this.arr);
      console.log("sortedArr:");
      console.log(arr);
      this.root = this.bst(arr, 0, arr.length);
    },
    bst(arr, begin, end) {
      if (begin > end) {
        return null;
      } else {
        let m = parseInt((begin + end) / 2);
        let node = mkNode(arr[m]);
        node.left = this.bst(arr, begin, m - 1);
        node.right = this.bst(arr, m + 1, end);
        return node;
      }
    },
  };
}

export { mkTree };
