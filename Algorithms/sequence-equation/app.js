function permutationEquation(p) {
  const result = [];
  for (var i = 1; i <= p.length; i++) {
    var index = p.indexOf(i);
    result.push(p.indexOf(index + 1) + 1);
  }
  return result;
}
