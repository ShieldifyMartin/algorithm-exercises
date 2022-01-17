function staircase(n) {
  for (let i = 1; i <= n; i++) {
    const countSpaces = n - i;
    console.log(" ".repeat(countSpaces) + "#".repeat(i));
  }
}
