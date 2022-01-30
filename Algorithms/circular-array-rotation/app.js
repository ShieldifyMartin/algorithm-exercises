function circularArrayRotation(a, k, queries) {
  for (let i = 1; i <= k; i++) {
    a.unshift(a[a.length - 1]);
    a.pop();
  }
  const resultArray = [];
  for (let i = 0; i < queries.length; i++) {
    resultArray.push(a[queries[i]]);
  }
  return resultArray;
}
