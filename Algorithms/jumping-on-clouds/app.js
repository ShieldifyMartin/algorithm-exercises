function jumpingOnClouds(c, k) {
  let energy = 100;
  for (let i = 0; i < c.length; i += k) {
    if (c[i] === 1) {
      energy -= 2;
    }
    energy--;

    if (i + k > c.length) {
      i = i - c.length;
    }
    if (energy === 0 || i + k === c.length) {
      break;
    }
  }
  return energy;
}
