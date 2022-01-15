function compareTriplets(a, b) {
  let alicePoints = 0;
  let bobPoints = 0;
  for (let i = 0; i < Math.min(a.length, b.length); i++) {
    if (a[i] > b[i]) {
      alicePoints++;
    } else if (b[i] > a[i]) {
      bobPoints++;
    }
  }

  const result = [alicePoints, bobPoints];
  return result;
}
