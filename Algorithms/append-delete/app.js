function appendAndDelete(s, t, k) {
  let counterActions = 0;
  for (let i = 0; i < Math.max(s.length, t.length); i++) {
    if (s[i] === t[i]) {
      continue;
    }
    for (let j = i; j < s.length; j++) {
      s.slice(0, -1);
      counterActions++;
    }
    for (let j = Math.min(i, t.length - 1); j < t.length; j++) {
      s += t[j].toLowerCase();
      counterActions++;
    }

    const difference = k - counterActions;
    return counterActions === k ||
      s.length + t.length <= k ||
      (counterActions < k && difference % 2 === 0)
      ? "Yes"
      : "No";
  }

  return "Yes";
}
