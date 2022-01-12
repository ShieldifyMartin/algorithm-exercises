function countingValleys(steps, path) {
  let valleyCount = 0;
  let currentLevel = 0;

  for (let i = 0; i < path.length; i++) {
    if (path[i] === "U") {
      currentLevel++;
      if (currentLevel === 0) {
        valleyCount++;
      }
    } else if (path[i] === "D") {
      currentLevel--;
    }
  }

  return valleyCount;
}
