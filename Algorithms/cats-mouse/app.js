function catAndMouse(x, y, z) {
  const catA = x;
  const catB = y;
  const mouse = z;
  const catADistance = Math.abs(catA - mouse);
  const catBDistance = Math.abs(catB - mouse);

  if (catADistance === catBDistance) {
    return "Mouse C";
  } else {
    return catADistance < catBDistance ? "Cat A" : "Cat B";
  }
}
