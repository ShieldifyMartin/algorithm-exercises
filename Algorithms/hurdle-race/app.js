function hurdleRace(k, height) {
  const desiredHeight = Math.max(...height);
  return desiredHeight < k ? 0 : desiredHeight - k;
}
