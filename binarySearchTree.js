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
      this.root = this.bst(arr, 0, arr.length - 1);
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
    find(value) {
      let current = this.root;
      while (current) {
        if (current.data == value) {
          return current;
        } else if (value < current.data) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
      return current;
    },
    insert(value) {
      let current = this.root;
      if (current == null) {
        this.null = mkNode(value);
      } else {
        while (current) {
          if (value == current.data) {
            //duplicate value, do nothing
            break;
          } else if (value < current.data) {
            //if empty
            if (current.left == null) {
              current.left = mkNode(value);
              break;
            } else {
              current = current.left;
            }
          } else {
            if (current.right == null) {
              current.right = mkNode(value);
              break;
            } else {
              current = current.right;
            }
          }
        }
      }
    },
    delete(value) {
      this.root = this.deleteRec(this.root, value);
    },
    deleteRec(node, value) {
      //base case, value is not in bst
      if (node == null) {
        return node;
      }
      //travel the tree with recursive call
      if (value < node.data) {
        node.left = this.deleteRec(node.left, value);
        return node;
      }
      if (value > node.data) {
        node.right = this.deleteRec(node.right, value);
        return node;
      }
      //arriving here meant node.data == value
      //we are looking to delete the node in the parameter

      //best case: node is a leaf
      if (node.left == null && node.right == null) {
        return null;
      }

      //2nd best, one child is empty
      else if (node.left == null) {
        return node.right;
      } else if (node.right == null) {
        return node.left;
      }
      //worst case, two children
      else {
        //replace with inorder sucessor
        let parent = node;
        let succ = node.right;

        while (succ.left) {
          parent = succ;
          succ = parent.left;
        }
        //sucessor found, replace data
        node.data = structuredClone(succ.data);

        if (node == parent) {
          parent.right = succ.right;
        } else {
          parent.left = succ.right;
        }
        return node;
      }
    },
    recordvalues(arr, node) {
      arr.push;
    },
    levelorder(fn = null) {
      let queue = [];
      queue.push(this.root);
      let dataArr = [];
      while (queue[0]) {
        let current = queue[0];
        if (current.left) {
          queue.push(current.left);
        }
        if (current.right) {
          queue.push(current.right);
        }
        if (fn) {
          fn(current);
        } else {
          dataArr.push(current.data);
        }
        queue.shift();
      }
      if (!fn) {
        return dataArr;
      }
    },
  };
}

export { mkTree };
