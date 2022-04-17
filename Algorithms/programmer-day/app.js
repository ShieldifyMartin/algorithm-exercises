function dayOfProgrammer(year) {
  let isLeap = false;
  if (year < 1918) {
    isLeap = year % 4 === 0;
  } else if (year > 1918) {
    isLeap = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
  } else {
    return "26.09.1918";
  }

  return isLeap ? "12" + ".09." + year : "13" + ".09." + year;
}
