function kangaroo(x1, v1, x2, v2) {
  let kangaroo1 = x1;
  let kangaroo2 = x2;

  let isSame = false;
  let interationCount = 0;
  const limit = 10000;
  while (true) {
    if (interationCount >= limit) {
      break;
    }
    if (kangaroo1 === kangaroo2) {
      isSame = true;
      break;
    }

    kangaroo1 += v1;
    kangaroo2 += v2;
    interationCount++;
  }
  if (isSame) {
    return "YES";
  }
  return "NO";
}
