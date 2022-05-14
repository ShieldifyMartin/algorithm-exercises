function birthdayCakeCandles(candles) {
  let largestValue = Math.max(...candles);
  let count = 0;

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === largestValue) {
      count++;
    }
  }

  console.log(count);
  return count;
}
