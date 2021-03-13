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

  search(root, data) {
    if (!root) {
      return false;
    } else {
      if (data === root.data) {
        return root;
      } else if (data < root.data) {
        return this.search(root.left, data);
      } else if (data > root.data) {
        return this.search(root.right, data);
      }
      return false;
    }
  }

  insert(root, data) {
    if (root.data === data) {
      return;
    }
    if (data < root.data) {
      if (!root.left) {
        root.left = new Node(data);
        return;
      }
      this.insert(root.left, data);
    } else {
      if (!root.right) {
        root.right = new Node(data);
        return;
      }
      this.insert(root.right, data);
    }
  }

  isLeaf(root) {
    return !root.left && !root.right;
  }

  hasOneChild(root) {
    return !root.left || !root.right;
  }

  hasTwoChildren(root) {
    return root.left && root.right;
  }

  getMinimumNode(root) {
    if (!root) return;

    let tNode = root;
    while (tNode.left) {
      tNode = tNode.left;
    }
    return tNode;
  }

  getParent(root, data) {
    if (!root) return;
    if (!!this.search(root, data)) {
      if (
        (root.left && root.left.data === data) ||
        (root.right && root.right.data === data)
      )
        return root;

      let node = this.getParent(root.left, data);
      if (node) return node;

      node = this.getParent(root.right, data);
      if (node) return node;
    }
    return false;
  }

  getInorderSuccessor(root, data) {
    const currentNode = this.search(root, data);
    if (!currentNode) return;

    // Case: CurrentNode has right subtree
    if (currentNode.right) {
      return this.getMinimumNode(currentNode.right);
    }

    // Case: CurrentNode has no right subtree
    let ancestorNode = root;
    let successorNode = null;

    while (ancestorNode !== currentNode) {
      if (currentNode.data < ancestorNode.data) {
        successorNode = ancestorNode;
        ancestorNode = ancestorNode.right;
      } else {
        ancestorNode = ancestorNode.left;
      }
    }

    return successorNode;
  }

  delete(root, data) {
    if (!root) {
      return;
    } else {
      const currentNode = this.search(root, data);
      if (!currentNode) return;

      // Case: Node has no child
      if (this.isLeaf(currentNode)) {
        const parentNode = this.getParent(root, data);
        if (parentNode.left === currentNode) {
          parentNode.left = null;
          return;
        }
        parentNode.right = null;
      }

      // Case: Node has a single child
      if (this.hasOneChild(currentNode)) {
        const parentNode = this.getParent(root, data);

        if (parentNode.left === currentNode) {
          if (!currentNode.left) {
            parentNode.left = currentNode.right;
            return;
          }
          parentNode.left = currentNode.left;
          return;
        }

        if (parentNode.right === currentNode) {
          if (!currentNode.left) {
            parentNode.right = currentNode.right;
            return;
          }
          parentNode.right = currentNode.left;
          return;
        }
      }

      // Case: Node has two children
      if (this.hasTwoChildren(currentNode)) {
        const parentNode = this.getParent(root, data);
        const successorNode = this.getInorderSuccessor(root, data);
        const successorData = successorNode.data;

        if (parentNode.left === currentNode) {
          this.delete(root, successorData);
          parentNode.left.data = successorData;
          parentNode.left.left = currentNode.left;
          parentNode.right.right = currentNode.right;
        }

        if (parentNode.right === currentNode) {
          this.delete(root, successorData);
          parentNode.right.data = successorData;
          parentNode.left.left = currentNode.left;
          parentNode.right.right = currentNode.right;
        }
        return;
      }
    }
  }

  inorder(root) {
    if (!root) return;
    this.inorder(root.left);
    console.log(root.data);
    this.inorder(root.right);
  }
}

module.exports = {
  BinarySearchTree,
};
