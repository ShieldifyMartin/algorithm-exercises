function squares(a, b) {
  let counter = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    const square = Math.sqrt(i);
    if (square % 1 === 0) {
      counter++;
      i = (square + 1) * (square + 1) - 1;
    }
  }
  return counter;
}
