function cutTheSticks(arr) {
  let modifiedArray = arr.sort((a, b) => a - b);
  const result = [];

  while (modifiedArray.length > 0) {
    result.push(modifiedArray.length);
    const currentMinValue = Math.min(...modifiedArray);

    modifiedArray.reduce((target, value, index) => {
      modifiedArray[index] -= currentMinValue;

      return target;
    }, []);

    let remove = modifiedArray.lastIndexOf(0) + 1;

    modifiedArray.splice(0, remove);
  }

  return result;
}
