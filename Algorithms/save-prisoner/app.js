function saveThePrisoner(n, m, s) {
  let prisoner = (s + m - 1) % n;
  if (prisoner === 0) {
    return n;
  }
  return prisoner;
}
