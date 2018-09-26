module.exports = () => {
  it("Maintains invariants of a red-black tree",() => {
    let uut = new RedBlackTree();
    assert.strictEqual(uut.root.isBlack,true);
    assert.strictEqual(uut.root.isLeaf(),true);

    uut.insert(1,'a');
  });
};

