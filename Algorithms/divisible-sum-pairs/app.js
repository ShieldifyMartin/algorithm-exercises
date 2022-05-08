function divisibleSumPairs(n, k, ar) {
  let count = 0;
  let sum = [];

  for (let i = 0; i < ar.length; i++) {
    for (let j = i + 1; j < ar.length; j++) {
      sum = [ar[i], ar[j]].reduce((prev, current) => prev + current, 0);
      console.log([ar[i], ar[j]] + " -> " + sum);
      if (sum % k === 0) {
        count++;
      }
    }
  }

  return count;
}
