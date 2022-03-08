function utopianTree(n) {
  if (n === 0) return 1;
  let treeHeight = 0;

  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      treeHeight++;
    } else {
      treeHeight *= 2;
    }
  }

  return treeHeight;
}
