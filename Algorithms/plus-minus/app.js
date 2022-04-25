function plusMinus(arr) {
  const n = arr.length;
  let countPosititives = 0;
  let countNegatives = 0;
  let countZeroes = 0;

  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];
    if (currentNumber > 0) {
      countPosititives++;
    } else if (currentNumber < 0) {
      countNegatives++;
    } else {
      countZeroes++;
    }
  }

  const positivesRatio = (countPosititives / n).toFixed(6);
  const negativesRatio = (countNegatives / n).toFixed(6);
  const zeroesRatio = (countZeroes / n).toFixed(6);

  console.log(positivesRatio);
  console.log(negativesRatio);
  console.log(zeroesRatio);
}
