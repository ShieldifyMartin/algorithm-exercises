function beautifulDays(i, j, k) {
  let daysCounter = 0;
  for (let day = i; day <= j; day++) {
    const reversedDay = day.toString().split("").reverse().join("");
    if (Math.abs(day - reversedDay) % k === 0) {
      daysCounter++;
    }
  }

  return daysCounter;
}
