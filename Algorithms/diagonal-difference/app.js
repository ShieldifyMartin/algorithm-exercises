function diagonalDifference(arr) {
  let n = arr[0].length;
  let d1 = 0;
  let d2 = 0;

  for (let i = 0, j = n - 1; i < n; i++, j--) {
    d1 += arr[i][i];
    d2 += arr[i][j];
  }
  let result = d1 - d2;
  return Math.abs(result);
}
