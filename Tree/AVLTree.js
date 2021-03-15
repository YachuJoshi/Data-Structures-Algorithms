const { BinarySearchTree } = require("./BinarySearchTree");

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AVLTree extends BinarySearchTree {
  constructor({ root }) {
    super({ root });
    this.root = new Node(root);
  }

  getHeight(root) {
    if (!root) return 0;
    return root.height;
  }

  getBalance(root) {
    if (!root) return;
    return this.getHeight(root.left) - this.getHeight(root.right);
  }

  insert(root, data) {
    if (!root) return new Node(data);
    if (data < root.data) {
      root.left = this.insert(root.left, data);
    }
    if (data > root.data) {
      root.right = this.insert(root.right, data);
    }
    root.height =
      1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));

    let balanceFactor = this.getBalance(root);

    // LEFT
    if (balanceFactor > 1) {
      // LEFT
      if (data < root.left.data) {
        return this.rightRotate(root);
      }
      // RIGHT
      else {
        root.left = this.leftRotate(root);
        return this.rightRotate(root);
      }
    }
    // RIGHT
    if (balanceFactor < -1) {
      // RIGHT
      if (data > root.right.data) {
        return this.leftRotate(root);
      }
      // LEFT
      else {
        root.right = this.rightRotate(root);
        return this.leftRotate(root);
      }
    }
    return root;
  }

  leftRotate(root) {
    let rightNode = root.right;
    let childOfRightNode = rightNode.left;
    root.right = childOfRightNode;
    rightNode.left = root;
    root.height =
      1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));
    rightNode.height =
      1 +
      Math.max(this.getHeight(rightNode.left), this.getHeight(rightNode.right));
    return rightNode;
  }

  rightRotate(root) {
    let leftNode = root.left;
    let childOfLeftNode = leftNode.right;
    root.left = childOfLeftNode;
    leftNode.right = root;
    root.height =
      1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));
    leftNode.height =
      1 +
      Math.max(this.getHeight(leftNode.left), this.getHeight(leftNode.right));
    return leftNode;
  }
}

module.exports = {
  AVLTree,
};
