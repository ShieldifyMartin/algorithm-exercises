function pageCount(n, p) {
  let countTurns = 0;

  if (n - p > p - 1) {
    for (let i = 1; i < n; i += 2) {
      //check if current or previous page is the one we are searching for
      if (i !== p && i - 1 !== p) {
        countTurns++;
      } else {
        break;
      }
    }
  } else {
    if (n % 2 === 0 && n - p === 1) {
      return 1;
    }
    for (let i = n; i >= 1; i -= 2) {
      //check if current or previous page is the one we are searching for
      if (i !== p && i - 1 !== p) {
        countTurns++;
      } else {
        break;
      }
    }
  }

  return countTurns;
}
