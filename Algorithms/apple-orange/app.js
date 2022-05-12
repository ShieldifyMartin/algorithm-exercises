function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let applesInRangeCount = 0;
  for (let i = 0; i < apples.length; i++) {
    const currentDistance = apples[i] + a;
    if (currentDistance >= s && currentDistance <= t) {
      applesInRangeCount++;
    }
  }
  let orangesInRangeCount = 0;
  for (let i = 0; i < oranges.length; i++) {
    const currentDistance = oranges[i] + b;
    if (currentDistance >= s && currentDistance <= t) {
      orangesInRangeCount++;
    }
  }
  console.log(applesInRangeCount);
  console.log(orangesInRangeCount);
}
