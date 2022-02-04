function findDigits(n) {
  const numToString = n.toString();
  let counter = 0;
  for (let i = 0; i < numToString.length; i++) {
    if (n % Number(numToString[i]) === 0) {
      counter++;
    }
  }
  return counter;
}
