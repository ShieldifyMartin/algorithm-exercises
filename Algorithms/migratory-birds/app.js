function migratoryBirds(arr) {
  let frequencyDataObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in frequencyDataObj) {
      frequencyDataObj[arr[i]]++;
    } else {
      frequencyDataObj[arr[i]] = 1;
    }
  }

  const mostFrequent = Object.keys(frequencyDataObj).reduce((prev, current) =>
    frequencyDataObj[prev] >= frequencyDataObj[current] ? prev : current
  );
  return mostFrequent;
}
