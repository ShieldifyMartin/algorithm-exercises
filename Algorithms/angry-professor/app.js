function angryProfessor(k, a) {
  let attendaceCount = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) {
      attendaceCount++;
    }
  }

  if (attendaceCount < k) {
    return "YES";
  } else {
    return "NO";
  }
}
