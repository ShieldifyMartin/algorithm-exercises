function birthday(s, d, m) {
  let count = 0;
  let sum = [];

  for (let i = 0; i < s.length; i++) {
    sum = s.slice(i, m + i).reduce((prev, curr) => prev + curr);
    if (sum === d) {
      count++;
    }
  }

  return count;
}
