const BinarySearchTree = require('binary-search-tree');
const RedBlackNode = require('red-black-node');

module.exports = class RedBlackTree extends BinarySearchTree {
  constructor(options) {
    super(options);
  }

  insert(key,value) {
    let newNode = super.insert(key,value);
    newNode.isRed = true;

    const newLeft = this.nodeFactory({ isRed: false });
    const newRight = this.nodeFactory({ isRed: false });
    newLeft.replaceWith(newNode.left);
    newRight.replaceWith(newNode.right);
    newNode.left = newLeft;
    newNode.right = newRight;

    console.log(newNode);
    return newNode;
  }

  get NodeClass() {
    return RedBlackNode;
  }
};

