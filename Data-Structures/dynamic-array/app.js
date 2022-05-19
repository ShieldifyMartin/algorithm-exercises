function dynamicArray(n, queries) {
  //initalise values
  let lastAnswer = 0;
  let array = [];
  for (let i = 0; i < n; i++) {
    array[i] = [];
  }
  let resultValues = [];

  for (let i = 0; i < queries.length; i++) {
    let type = queries[i][0];
    let x = queries[i][1];
    let y = queries[i][2];
    const index = (x ^ lastAnswer) % n;

    if (type === 1) {
      array[index].push(y);
    } else if (type === 2) {
      var size = array[index].length;
      var element = array[index][y % size];
      // console.log(array);
      // console.log(y + " % " + size + "  =  " + y % size);
      // console.log(element);

      lastAnswer = element;
      resultValues.push(lastAnswer);
    }
  }
  return resultValues;
}
