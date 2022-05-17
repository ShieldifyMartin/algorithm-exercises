function rotateLeft(d, arr) {
  const resultArray = arr;
  for (let i = 1; i <= d; i++) {
    let firstElement = resultArray[0];
    resultArray.shift();
    resultArray.push(firstElement);
  }
  return resultArray;
}
