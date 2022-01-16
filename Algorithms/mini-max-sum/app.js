function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);

  let minSum = Math.min(...arr);
  let maxSum = Math.max(...arr);

  //remove smallest and largest value
  arr.shift();
  arr.pop();

  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];

    minSum += currentElement;
    maxSum += currentElement;
  }

  console.log(minSum + " " + maxSum);
}
