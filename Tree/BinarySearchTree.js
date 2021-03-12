class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor({ root }) {
    this.root = new Node(root);
  }

  insert(node, data) {
    if (node.data === data) {
      return;
    }
    if (data < node.data) {
      if (!node.left) {
        node.left = new Node(data);
        return;
      }
      this.insert(node.left, data);
    } else {
      if (!node.right) {
        node.right = new Node(data);
        return;
      }
      this.insert(node.right, data);
    }
  }

  inorder(root) {
    if (!root) {
      return;
    } else {
      this.inorder(root.left);
      console.log(root.data);
      this.inorder(root.right);
    }
  }
}

module.exports = {
  BinarySearchTree,
};
