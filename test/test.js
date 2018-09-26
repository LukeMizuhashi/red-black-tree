global.RedBlackTree = require('../src/constructor.js');
global.assert = require('chai').assert;

const describeConstructor = require('./constructor/description.js');

describe('RedBlackTree',() => {

  describeConstructor();
  // describe('RedBlackTree.isLeaf',describeIsLeaf);
});

