function getTotalX(a, b) {
  let count = 0;
  for (let i = a[a.length - 1]; i <= b[0]; i++) {
    let currentCount = 0;
    for (let j = 0; j < a.length; j++) {
      if (i % a[j] === 0) {
        currentCount++;
      }
    }

    for (let k = 0; k < b.length; k++) {
      if (b[k] % i === 0) {
        currentCount++;
      }
    }

    if (currentCount == a.length + b.length) {
      count++;
    }
  }
  return count;
}
